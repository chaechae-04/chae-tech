import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "chae-tech에서 만든 프로젝트 모음",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section>
      <h1 className="text-3xl font-semibold text-foreground">Projects</h1>
      <p className="mt-3 text-muted">
        직접 만들고 배포한 프로젝트들입니다. 사이트와 저장소 링크로 이동할 수
        있습니다.
      </p>

      <div className="mt-10">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="border border-dashed border-border px-6 py-10 text-center text-sm text-muted">
            아직 등록된 프로젝트가 없습니다.{" "}
            <code className="text-foreground">lib/projects.ts</code>에 추가해
            보세요.
          </p>
        )}
      </div>
    </section>
  );
}
