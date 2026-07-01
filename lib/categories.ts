export const CATEGORIES = [
  {
    id: "fundamentals",
    label: "Fundamentals",
    description: "기초 · 동작 원리",
  },
  {
    id: "web",
    label: "Web",
    description: "웹 개발",
  },
  {
    id: "algo",
    label: "Algorithm",
    description: "알고리즘",
  },
  {
    id: "project",
    label: "Project",
    description: "프로젝트 회고",
  },
] as const;

export type Category = (typeof CATEGORIES)[number]["id"];

export function getCategoryLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function isCategory(value: string): value is Category {
  return CATEGORIES.some((c) => c.id === value);
}
