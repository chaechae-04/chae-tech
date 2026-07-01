import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Category, isCategory } from "./categories";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  tags: string[];
  content: string;
  readingTime: string;
}

function getMdxFilePaths(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFilePaths(fullPath));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function parsePost(filePath: string): Post | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const relativePath = path.relative(CONTENT_DIR, filePath);
  const slug = relativePath.replace(/\.mdx$/, "");
  const categoryFromPath = slug.split("/")[0];

  if (!isCategory(categoryFromPath)) return null;

  const category = (data.category as Category) ?? categoryFromPath;
  if (!isCategory(category)) return null;

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    category,
    tags: data.tags ?? [],
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): Post[] {
  return getMdxFilePaths(CONTENT_DIR)
    .map(parsePost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parsePost(filePath);
}

export function getPostsByCategory(category: Category): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}
