using Application.Projects.Commands;
using Application.Projects.Validators;
using Xunit;

namespace UnitTests.Application;

public class CreateProjectCommandValidatorTests
{
    private readonly CreateProjectCommandValidator _validator = new();

    [Fact]
    public void Validate_ShouldPassForValidCommand()
    {
        var command = new CreateProjectCommand("Project", "Description");

        var result = _validator.Validate(command);

        Assert.True(result.IsValid);
    }

    [Fact]
    public void Validate_ShouldFailWhenNameMissing()
    {
        var command = new CreateProjectCommand(string.Empty, "Description");

        var result = _validator.Validate(command);

        Assert.False(result.IsValid);
        Assert.Contains(result.Errors, e => e.PropertyName == nameof(CreateProjectCommand.Name));
    }
}
