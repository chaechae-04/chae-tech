export interface Project {
  slug: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  stack: string[];
  status: "live" | "wip" | "archive";
}

export const PROJECTS: Project[] = [
  {
    slug: "chae-tech",
    title: "chae-tech",
    description: "기술 학습과 알고리즘, 프로젝트 회고를 기록하는 테크 블로그입니다.",
    url: "https://chae-tech.vercel.app",
    github: "https://github.com/your-username/chae-tech",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    status: "live",
  },
  {
    slug: "visual-code",
    title: "Visual Code",
    description: "알고리즘을 시각화하는 웹 앱입니다.",
    url: "https://visual-code-two.vercel.app",
    github: "https://github.com/chaechae-04/visual-code",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS",],
    status: "live",
  }
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}
