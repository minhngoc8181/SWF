using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Persistence;

public sealed class SwfDbContextFactory : IDesignTimeDbContextFactory<SwfDbContext>
{
    public SwfDbContext CreateDbContext(string[] args)
    {
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true)
            .AddJsonFile("appsettings.Development.json", optional: true)
            .AddEnvironmentVariables()
            .Build();

        var optionsBuilder = new DbContextOptionsBuilder<SwfDbContext>();
        var connectionString = configuration.GetConnectionString("Database")
                               ?? "Server=(localdb)\\MSSQLLocalDB;Database=SwfDb;Trusted_Connection=True;";

        optionsBuilder.UseSqlServer(connectionString);

        return new SwfDbContext(optionsBuilder.Options);
    }
}
