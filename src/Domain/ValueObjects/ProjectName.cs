using System;
using System.Diagnostics.CodeAnalysis;

namespace Domain.ValueObjects;

public sealed record ProjectName
{
    public string Value { get; }

    private ProjectName(string value)
    {
        Value = value;
    }

    public static bool TryCreate(string? value, [NotNullWhen(true)] out ProjectName? projectName, out string? error)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            projectName = null;
            error = "Project name cannot be empty.";
            return false;
        }

        var trimmed = value.Trim();
        if (trimmed.Length > 128)
        {
            projectName = null;
            error = "Project name must be 128 characters or fewer.";
            return false;
        }

        projectName = new ProjectName(trimmed);
        error = null;
        return true;
    }

    public static ProjectName Create(string? value)
    {
        if (!TryCreate(value, out var name, out var error))
        {
            throw new ArgumentException(error, nameof(value));
        }

        return name;
    }

    public override string ToString() => Value;
}
