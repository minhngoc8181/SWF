using Domain.Entities;
using Domain.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations;

public sealed class ProjectConfiguration : IEntityTypeConfiguration<Project>
{
    public void Configure(EntityTypeBuilder<Project> builder)
    {
        builder.ToTable("Projects");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Property(x => x.CreatedAt)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(1024);

        builder.Property(x => x.Name)
            .HasConversion(
                name => name.Value,
                value => ProjectName.Create(value))
            .HasMaxLength(128)
            .IsRequired();

        builder.HasIndex(x => x.Name)
            .HasDatabaseName("IX_Projects_Name");
    }
}
