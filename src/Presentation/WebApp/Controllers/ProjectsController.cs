using System.Linq;
using Application.Projects.Commands;
using Application.Projects.Dtos;
using Application.Projects.Services;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers;

[ApiController]
[Route("projects")]
public sealed class ProjectsController : ControllerBase
{
    private readonly IProjectService _projectService;

    public ProjectsController(IProjectService projectService)
    {
        _projectService = projectService;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyCollection<ProjectDto>>> GetAll(CancellationToken cancellationToken)
    {
        var projects = await _projectService.GetAllAsync(cancellationToken);
        return Ok(projects);
    }

    [HttpPost]
    public async Task<ActionResult<ProjectDto>> Create([FromBody] CreateProjectRequest request, CancellationToken cancellationToken)
    {
        try
        {
            var dto = await _projectService.CreateAsync(new CreateProjectCommand(request.Name, request.Description), cancellationToken);
            return Created($"/projects/{dto.Id}", dto);
        }
        catch (ValidationException validationException)
        {
            var errors = validationException.Errors
                .GroupBy(error => error.PropertyName ?? string.Empty)
                .ToDictionary(group => group.Key, group => group.Select(error => error.ErrorMessage).ToArray());

            return ValidationProblem(new ValidationProblemDetails(errors));
        }
        catch (ArgumentException argumentException)
        {
            return BadRequest(new { error = argumentException.Message });
        }
    }

    public sealed record CreateProjectRequest(string Name, string? Description);
}
