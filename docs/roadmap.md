# Roadmap

## Phase 0 – Bootstrap (Week 1)
- [x] Create solution (`dotnet new sln`) and projects: `Presentation/WebApp`, `Application`, `Domain`, `Infrastructure`.
- [x] Wire project references to enforce dependency flow and configure DI extension methods.
- [x] Expose a sample endpoint using in-memory data to validate the pipeline.
- [ ] Enable Swagger, health checks, and logging basics (Serilog console sink).

## Phase 1 – Domain & Persistence Foundation
- [x] Model initial domain entities and value objects (e.g., core business aggregate).
- [x] Introduce EF Core with SQL Server provider, configure DbContext and migrations.
- [x] Implement repository abstractions in Application and concrete implementations in Infrastructure.
- [x] Add FluentValidation for key commands/queries and unit tests covering domain rules.

## Phase 2 – Application Services & Observability
- [ ] Integrate MediatR for CQRS handlers with logging/validation pipeline behaviors.
- [ ] Add AutoMapper profiles for request/response mapping.
- [ ] Enhance Serilog configuration (structured logging, request logging middleware).
- [ ] Introduce OpenTelemetry exporters (traces/metrics) and connect to local collector or Application Insights.
- [ ] Expand integration tests using WebApplicationFactory against in-memory persistence.

## Phase 3 – Security & Background Processing
- [ ] Implement ASP.NET Core Identity with JWT issuance and refresh token support.
- [ ] Configure authorization policies/requirements reflecting domain rules.
- [ ] Add Hangfire (or Quartz) for scheduled/background jobs with dashboard protected via Identity.
- [ ] Introduce caching layer (Redis) for read-heavy endpoints.
- [ ] Evaluate message bus integration (RabbitMQ or Azure Service Bus) for eventual domain event publishing.

## Phase 4 – Deployment & Scaling
- [ ] Create Dockerfile and docker-compose for local multi-service development.
- [ ] Set up GitHub Actions pipeline (restore, build, test, publish, deploy).
- [ ] Provision Azure infrastructure (App Service or Container Apps, SQL database, Redis) and script via Bicep/Terraform.
- [ ] Configure Application Insights dashboards and log retention policies.
- [ ] Document deployment runbook and rollback procedures in `docs/`.

## Phase 5 – UX & Front-End Enhancements (Optional)
- [ ] Decide between Razor Pages, Blazor, or separate SPA framework for rich UI needs.
- [ ] Implement shared component library under `Presentation/WebApp/Components`.
- [ ] Integrate API versioning and rate limiting.
- [ ] Localize content and implement feature flags if multi-tenant or staged rollouts occur.

## Parking Lot / Ideas
- [ ] Experiment with event sourcing or CQRS read stores if domain complexity grows.
- [ ] Add feature flag service (Azure App Configuration, LaunchDarkly) for A/B testing.
- [ ] Explore GraphQL endpoint for client flexibility.
- [ ] Automate database migrations via CI/CD pipeline.
