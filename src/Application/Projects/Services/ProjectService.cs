using System.Collections.Generic;
using System.Linq;
using Application.Common.Interfaces;
using Application.Projects.Commands;
using Application.Projects.Dtos;
using Domain.Entities;
using Domain.ValueObjects;
using FluentValidation;

namespace Application.Projects.Services;

public sealed class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;
    private readonly IValidator<CreateProjectCommand> _validator;

    public ProjectService(IProjectRepository repository, IValidator<CreateProjectCommand> validator)
    {
        _repository = repository;
        _validator = validator;
    }

    public async Task<ProjectDto> CreateAsync(CreateProjectCommand command, CancellationToken cancellationToken = default)
    {
        await _validator.ValidateAndThrowAsync(command, cancellationToken);

        if (!ProjectName.TryCreate(command.Name, out var name, out var error))
        {
            throw new ValidationException(error ?? "Invalid project name.");
        }

        var project = Project.Create(name, command.Description);

        project = await _repository.AddAsync(project, cancellationToken);
        await _repository.SaveChangesAsync(cancellationToken);

        return ToDto(project);
    }

    public async Task<IReadOnlyCollection<ProjectDto>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        var projects = await _repository.GetAllAsync(cancellationToken);
        return projects.Select(ToDto).ToArray();
    }

    private static ProjectDto ToDto(Project project) => new(project.Id, project.Name.Value, project.Description, project.CreatedAt);
}
