using Application.Projects.Commands;
using Application.Projects.Dtos;

namespace Application.Projects.Services;

public interface IProjectService
{
    Task<ProjectDto> CreateAsync(CreateProjectCommand command, CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<ProjectDto>> GetAllAsync(CancellationToken cancellationToken = default);
}
