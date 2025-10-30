using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace IntegrationTests.Infrastructure;

public sealed class CustomWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override IHost CreateHost(IHostBuilder builder)
    {
        builder.UseEnvironment("Testing");

        var databaseName = $"SwfIntegrationTests_{Guid.NewGuid():N}";
        Environment.SetEnvironmentVariable("Infrastructure__UseInMemoryDatabase", bool.TrueString);
        Environment.SetEnvironmentVariable("Infrastructure__InMemoryDatabaseName", databaseName);

        return base.CreateHost(builder);
    }
}
