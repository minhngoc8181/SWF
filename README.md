## Structure Overview

```
SWF.sln
└─ src/
   ├─ Presentation/
   │  └─ WebApp/             # ASP.NET Core host: UI (MVC/Razor/Blazor) + API endpoints
   │     ├─ Program.cs
   │     ├─ appsettings.json
   │     ├─ Controllers/
   │     ├─ Pages/           # Razor Pages or Blazor components
   │     ├─ Views/           # MVC views if applicable
   │     ├─ Components/      # ViewComponents, TagHelpers, UI widgets
   │     ├─ Areas/           # Feature modules (e.g., Admin, Identity, Api)
   │     └─ wwwroot/         # Static assets (css, js, images)
   ├─ Application/
   │  ├─ Common/             # DTOs, interfaces, cross-cutting concerns
   │  ├─ Features/           # CQRS handlers, use cases, commands/queries
   │  └─ Services/           # Orchestrators, application services
   ├─ Domain/
   │  ├─ Entities/           # POCO entities
   │  ├─ ValueObjects/
   │  ├─ Events/
   │  └─ Enums/
   └─ Infrastructure/
       ├─ Persistence/       # DbContext, EF Core migrations, repositories
       ├─ Identity/          # ASP.NET Core Identity, JWT providers
       ├─ Integration/       # gRPC/REST clients, message brokers
       └─ FileStorage/       # Azure Blob, AWS S3, local storage adapters
└─ tests/
    ├─ UnitTests/             # xUnit/NUnit/MSTest suites for domain + application
    └─ IntegrationTests/      # Persistence, messaging, API integration tests
└─ build/
    └─ scripts/               # CI/CD helper scripts, Dockerfiles, compose files
└─ .github/
    └─ workflows/             # GitHub Actions (CI/CD), issue templates
└─ docs/
    ├─ architecture.md        # Architecture overview, ADRs, diagrams
    └─ roadmap.md             # Feature plan and milestones
```

### Layer Responsibilities
- **Presentation**: UI surfaces (MVC, Razor, Blazor) and API endpoints. Keeps logic thin and delegates to Application.
- **Application**: Coordinates use cases via handlers, validation, mapping, and contracts consumed by Presentation.
- **Domain**: Core business logic independent from infrastructure and UI concerns.
- **Infrastructure**: Implements persistence, identity, messaging, caching, external services, and background processing hooks.

### Implementation Notes
- Start lightweight by scaffolding a single `Presentation/WebApp` project (via `dotnet new webapi` + Razor support) and class libraries for `Application`, `Domain`, and `Infrastructure`.
- Expose both MVC/Razor UI and API controllers/endpoints from the same project initially; split into `Presentation/Api` later only if deployment or ownership needs diverge.
- Wire MediatR, FluentValidation, AutoMapper, and other cross-cutting tools inside Application once needed.
- Manage secrets with user-secrets or Azure Key Vault, and split configs with `appsettings.{Environment}.json`.
- Integrate Serilog + OpenTelemetry for observability, and plan for Redis/Hangfire or similar for caching/background jobs.
- Document architectural changes under `docs/` and expand `tests/` steadily to guard behavior.

## Common Commands

Run everything from the repository root (`d:\EIU\SWF`).

| Purpose | Command |
| --- | --- |
| Restore dependencies | `dotnet restore` |
| Build solution | `dotnet build` |
| Launch the web app | `dotnet run --project src\Presentation\WebApp\WebApp.csproj` |
| Watch/run during development | `dotnet watch --project src\Presentation\WebApp\WebApp.csproj run` |
| Execute all tests | `dotnet test` |
| Apply latest EF Core migrations | `dotnet ef database update -p src\Infrastructure\Infrastructure.csproj -s src\Presentation\WebApp\WebApp.csproj` |
| Add a new migration | `dotnet ef migrations add <MigrationName> -p src\Infrastructure\Infrastructure.csproj -s src\Presentation\WebApp\WebApp.csproj --output-dir Persistence\Migrations` |
| Remove last migration (no database changes) | `dotnet ef migrations remove -p src\Infrastructure\Infrastructure.csproj -s src\Presentation\WebApp\WebApp.csproj` |
| Drop the development database | `dotnet ef database drop -p src\Infrastructure\Infrastructure.csproj -s src\Presentation\WebApp\WebApp.csproj --force --no-build` |


MVC home: https://localhost:7158/
Swagger: https://localhost:7158/swagger
Health: https://localhost:7158/health