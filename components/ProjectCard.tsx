import { Project } from "@/lib/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "운영 중",
  wip: "진행 중",
  archive: "아카이브",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-b border-border py-6 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="text-accent">{statusLabel[project.status]}</span>
        {project.stack.map((tech) => (
          <span key={tech} className="flex items-center gap-2">
            <span>·</span>
            <span>{tech}</span>
          </span>
        ))}
      </div>

      <h2 className="text-lg font-medium text-foreground">{project.title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            사이트 →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub →
          </a>
        )}
      </div>
    </article>
  );
}
