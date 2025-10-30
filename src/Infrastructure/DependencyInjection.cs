using Application.Common.Interfaces;
using Infrastructure.Persistence;
using Infrastructure.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var useInMemory = configuration.GetValue<bool>("Infrastructure:UseInMemoryDatabase");
        services.AddDbContext<SwfDbContext>((serviceProvider, options) =>
        {
            var env = serviceProvider.GetRequiredService<IHostEnvironment>();
            var loggerFactory = serviceProvider.GetRequiredService<ILoggerFactory>();

            options.UseLoggerFactory(loggerFactory);

            if (useInMemory)
            {
                var inMemoryName = configuration.GetValue<string?>("Infrastructure:InMemoryDatabaseName") ?? "SwfInMemory";
                options.UseInMemoryDatabase(inMemoryName);
            }
            else
            {
                var connectionString = configuration.GetConnectionString("Database");
                options.UseSqlServer(connectionString);
            }

            if (env.IsDevelopment())
            {
                options.EnableDetailedErrors();
                options.EnableSensitiveDataLogging();
            }
        });

        services.AddScoped<IProjectRepository, ProjectRepository>();

        return services;
    }
}
