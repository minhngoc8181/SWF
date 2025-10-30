using System;
using Domain.Entities;
using Domain.ValueObjects;
using Xunit;

namespace UnitTests.Domain;

public class ProjectTests
{
    [Fact]
    public void Create_ShouldTrimDescriptionAndAssignDefaults()
    {
        var name = ProjectName.Create("  Sample Project  ");

        var project = Project.Create(name, "  Description  ");

        Assert.NotEqual(Guid.Empty, project.Id);
        Assert.Equal("Sample Project", project.Name.Value);
        Assert.Equal("Description", project.Description);
        Assert.True(project.CreatedAt <= DateTimeOffset.UtcNow);
    }

    [Fact]
    public void UpdateDetails_ShouldApplyNewValues()
    {
        var project = Project.Create(ProjectName.Create("Initial"), null);
        var newName = ProjectName.Create("Updated");

        project.UpdateDetails(newName, null);

        Assert.Equal("Updated", project.Name.Value);
        Assert.Null(project.Description);
    }

    [Theory]
    [InlineData("")]
    [InlineData(" ")]
    public void ProjectName_ShouldRejectInvalidValues(string value)
    {
        var exception = Assert.Throws<ArgumentException>(() => ProjectName.Create(value));
        Assert.Contains("Project name cannot be empty", exception.Message);
    }
}
