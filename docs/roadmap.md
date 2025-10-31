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

## Phase 5 – Front-End Development (React SPA)
> **Decision**: Separate React SPA frontend for rich interactive educational experience
> **Reference**: See `docs/ui-ux-analysis.md` for detailed plan
> **Timeline**: 20-24 weeks (phased approach)

### Phase 5.0 – Frontend Foundation (2 weeks)
- [ ] Setup React + TypeScript + Vite project
- [ ] Install Tailwind CSS, Shadcn/ui, core dependencies
- [ ] Create design system (colors, typography, base components)
- [ ] Configure API client for .NET backend integration
- [ ] Setup React Query for server state management

### Phase 5.1 – Authentication & Landing (2 weeks)
- [ ] Build login/register pages with validation
- [ ] Implement JWT authentication flow
- [ ] Create public layout (Header, Footer)
- [ ] Design and build landing page
- [ ] SEO optimization (meta tags, sitemap)

### Phase 5.2 – Student Portal Core (3 weeks)
- [ ] Student dashboard with overview stats
- [ ] Test browsing, filtering, and search
- [ ] Test-taking interface (timer, navigation, auto-save)
- [ ] Results display with analytics
- [ ] Profile management

### Phase 5.3 – Learning Features (3 weeks)
- [ ] Course catalog and detail pages
- [ ] Video/content player for lessons
- [ ] Practice exercises with instant feedback
- [ ] Progress tracking dashboard
- [ ] Math equation rendering (KaTeX)

### Phase 5.4 – Gamification (2 weeks)
- [ ] Math games hub with mini-games
- [ ] Achievement badges and rewards system
- [ ] Leaderboards (global, class)
- [ ] Streak counter and notifications

### Phase 5.5 – Parent & Teacher Portals (5 weeks)
- [ ] Parent dashboard with multi-child support
- [ ] Progress reports and analytics for parents
- [ ] Teacher class management interface
- [ ] Assignment creation and grading tools
- [ ] Communication features (messaging, announcements)

### Phase 5.6 – Content & Support (2 weeks)
- [ ] Blog system for news and articles
- [ ] FAQ and help center
- [ ] Live chat integration
- [ ] Learning tools (calculator, drawing board)

### Phase 5.7 – Advanced Features (3 weeks)
- [ ] Internationalization (i18n) - Vietnamese & English
- [ ] AI personalization (adaptive learning paths)
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Analytics integration (GA4, error tracking)

### Phase 5.8 – Testing & Launch (2 weeks)
- [ ] Comprehensive E2E testing (Playwright)
- [ ] Cross-browser and mobile testing
- [ ] Accessibility audit (WCAG compliance)
- [ ] Production deployment setup
- [ ] Launch and monitoring

## Phase 6 – API Enhancements for Frontend
- [ ] Integrate API versioning and rate limiting
- [ ] Enhance API endpoints for frontend requirements (pagination, filtering)
- [ ] Add real-time features (SignalR) for notifications and live updates
- [ ] Implement caching strategies for read-heavy endpoints

## Parking Lot / Ideas
- [ ] Experiment with event sourcing or CQRS read stores if domain complexity grows.
- [ ] Add feature flag service (Azure App Configuration, LaunchDarkly) for A/B testing.
- [ ] Explore GraphQL endpoint for client flexibility.
- [ ] Automate database migrations via CI/CD pipeline.
