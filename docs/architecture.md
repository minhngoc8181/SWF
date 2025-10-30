# Architecture Overview

## Purpose
Lay out the target architecture for the SWF side project so future work stays aligned even when implemented incrementally in short evening sessions. Update this document whenever the design shifts.

## Solution Structure

```
SWF.sln
└─ src/
	 ├─ Presentation/WebApp     # ASP.NET Core host, combines UI + API endpoints
	 ├─ Application             # Use-case orchestration, CQRS handlers
	 ├─ Domain                  # Business entities, value objects, domain logic
	 └─ Infrastructure          # External integrations, persistence, identity
└─ tests/
	 ├─ UnitTests               # Focused domain/application tests
	 └─ IntegrationTests        # Host, persistence, messaging integration
└─ docs/                      # Architecture & roadmap (this directory)
└─ build/                     # Scripts, Dockerfiles, CI helpers (future)
```

## Layer Responsibilities

- **Presentation/WebApp**
	- Hosts ASP.NET Core pipeline (Minimal APIs + MVC/Razor/Blazor as needed).
	- Handles authentication/authorization middleware and exposes Swagger/health endpoints.
	- Raises commands/queries to the Application layer via MediatR (planned) and returns mapped DTOs.
	- Current implementation lives in `src/Presentation/WebApp/Program.cs`, wiring Application/Infrastructure layers, exposing `/projects` and `/health`, and applying EF Core migrations at startup.
- **Application**
	- Defines DTOs, validators, and orchestrates use-cases following CQRS.
	- Depends only on Domain abstractions and contracts located in Infrastructure (via interfaces).
	- Houses pipeline behaviors (logging, caching, validation) once MediatR is introduced.
	- Current implementation includes `Application.DependencyInjection`, `Projects` feature (`Commands`, `Services`, `Validators`), and repository abstractions under `Application/Common/Interfaces`.
- **Domain**
	- Contains pure business logic: entities, value objects, domain events, domain services.
	- No external dependencies; suitable for unit testing in isolation.
	- Current implementation models the `Project` aggregate in `Domain/Entities/Project.cs` and `ProjectName` value object in `Domain/ValueObjects/ProjectName.cs`.
- **Infrastructure**
	- Implements persistence (EF Core DbContext, repositories), identity providers, messaging, file storage, and external HTTP/gRPC clients.
	- Registers dependencies via extension methods consumed by Presentation during startup.
	- Current implementation provides `SwfDbContext`, EF Core configurations, repository implementations, configuration-driven provider selection, and the initial migration (`Infrastructure/Persistence/Migrations`).

## Dependency Flow

```
Presentation/WebApp → Application → Domain
									 ↘ Infrastructure (through DI abstractions)
Infrastructure → Domain
```

- Presentation references Application and Infrastructure.
- Application references Domain only; Infrastructure is accessed through interfaces injected at runtime.
- Infrastructure references Domain to map entities and publish domain events.

## Cross-Cutting Concerns

- **Configuration**: Standard `appsettings.json` plus environment-specific variants; sensitive values via user-secrets locally and Azure Key Vault when deployed.
- **Logging & Metrics**: Serilog configured in Presentation with sinks to console/file initially, extendable to Seq or Application Insights; OpenTelemetry exporters planned for tracing.
- **Validation**: FluentValidation in Application; pipeline behaviors ensure validation runs before handlers execute.
- **Mapping**: AutoMapper profiles defined near Application features; avoid leaking persistence models outward.
- **Caching**: Start with in-memory cache, plan to swap to Redis via Infrastructure when scale requires.
- **Background Jobs**: Hangfire or Quartz integration lives in Infrastructure; Application exposes commands used by job handlers.

## Request Lifecycle (Example)

1. HTTP request hits WebApp (`Controllers` or Minimal API endpoint).
2. Middleware handles auth, logging, exception policies.
3. Endpoint maps request to command/query DTO and sends to Application (MediatR or service interface).
4. Application handler executes domain logic, interacting with Infrastructure abstractions (e.g., repositories, message bus).
5. Domain entities produce events; Infrastructure persists them and dispatches notifications as needed.
6. Handler returns response DTO to Presentation for serialization.

## Persistence Plan

- Initial bootstrap: In-memory repository implementations to unblock early UI/API work.
- Phase 1 upgrade: EF Core with SQL Server provider, migrations located in `Infrastructure/Persistence/Migrations`.
- Optional read model: Introduce Dapper or query-specific models for performance-sensitive endpoints.

## Security Strategy

- Start with ASP.NET Core Identity and JWT authentication inside Infrastructure/Identity.
- Support external providers (Azure AD, Google) via `AddAuthentication().AddOpenIdConnect` when needed.
- Authorization policies defined in Application layer to keep business rules close to use cases.

## Testing Approach

- `tests/UnitTests`: Focus on Domain entities/services and Application handlers with mocked Infrastructure abstractions.
- `tests/IntegrationTests`: Use WebApplicationFactory to cover end-to-end scenarios against in-memory or test containers (SQL Server, Redis) once persistence is added.
- Automate test execution through GitHub Actions workflow when build scripts are introduced.

## DevOps & Deployment

- Local development via `dotnet run` from `Presentation/WebApp`.
- Containerization planned with multi-stage Dockerfile under `build/`.
- CI/CD goal: GitHub Actions pipeline running restore, build, test, publish, and deploy to Azure App Service or Azure Container Apps.
- Observability instrumentation (Serilog + OpenTelemetry) configured to push logs/metrics to Azure Monitor in production.

## Open Questions & Future Decisions

- Choose default database engine (SQL Server vs PostgreSQL) before Phase 1.
- Evaluate need for separate SPA front-end; current plan keeps Razor/Blazor within WebApp.
- Decide on domain event dispatch mechanism (in-process vs external message bus) once integration requirements surface.
