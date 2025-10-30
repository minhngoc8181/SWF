namespace Application.Projects.Dtos;

public sealed record ProjectDto(Guid Id, string Name, string? Description, DateTimeOffset CreatedAt);
