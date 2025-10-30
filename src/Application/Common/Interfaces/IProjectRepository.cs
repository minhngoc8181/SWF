using System.Collections.Generic;
using Domain.Entities;

namespace Application.Common.Interfaces;

public interface IProjectRepository
{
    Task<Project?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<Project>> GetAllAsync(CancellationToken cancellationToken = default);

    Task<Project> AddAsync(Project project, CancellationToken cancellationToken = default);

    Task SaveChangesAsync(CancellationToken cancellationToken = default);
}
