using System.Collections.Generic;
using System.Net.Http.Json;
using Application.Projects.Commands;
using Application.Projects.Dtos;
using IntegrationTests.Infrastructure;
using Xunit;

namespace IntegrationTests.Projects;

public class ProjectsEndpointsTests : IClassFixture<CustomWebApplicationFactory>
{
    private readonly HttpClient _client;

    public ProjectsEndpointsTests(CustomWebApplicationFactory factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task PostProjects_ShouldCreateProject()
    {
        var response = await _client.PostAsJsonAsync("/projects", new CreateProjectCommand("Integration Project", "Description"));
        response.EnsureSuccessStatusCode();

        var created = await response.Content.ReadFromJsonAsync<ProjectDto>();

        Assert.NotNull(created);
        Assert.Equal("Integration Project", created!.Name);
    }

    [Fact]
    public async Task GetProjects_ShouldReturnCollection()
    {
        await _client.PostAsJsonAsync("/projects", new CreateProjectCommand("Seed Project", null));

        var projects = await _client.GetFromJsonAsync<List<ProjectDto>>("/projects");

        Assert.NotNull(projects);
        Assert.NotEmpty(projects!);
    }
}
