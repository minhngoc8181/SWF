using Application.Projects.Commands;
using FluentValidation;

namespace Application.Projects.Validators;

public sealed class CreateProjectCommandValidator : AbstractValidator<CreateProjectCommand>
{
    public CreateProjectCommandValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Project name is required.")
            .MaximumLength(128).WithMessage("Project name must be 128 characters or fewer.");

        RuleFor(x => x.Description)
            .MaximumLength(1024).WithMessage("Description must be 1024 characters or fewer.");
    }
}
