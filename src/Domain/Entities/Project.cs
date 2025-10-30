using Domain.ValueObjects;

namespace Domain.Entities;

public class Project
{
    public Guid Id { get; private set; }

    public ProjectName Name { get; private set; } = null!;

    public string? Description { get; private set; }

    public DateTimeOffset CreatedAt { get; private set; }

    public static Project Create(ProjectName name, string? description)
    {
        return new Project
        {
            Id = Guid.NewGuid(),
            Name = name,
            Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
            CreatedAt = DateTimeOffset.UtcNow
        };
    }

    public void UpdateDetails(ProjectName name, string? description)
    {
        Name = name;
        Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim();
    }
}
