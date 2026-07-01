import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { CATEGORIES, isCategory } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const meta = CATEGORIES.find((item) => item.id === category);

  if (!meta) return { title: "카테고리를 찾을 수 없습니다" };

  return {
    title: meta.label,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!isCategory(category)) notFound();

  const meta = CATEGORIES.find((item) => item.id === category)!;
  const posts = getPostsByCategory(category);

  return (
    <section>
      <h1 className="text-3xl font-semibold text-foreground">{meta.label}</h1>
      <p className="mt-3 text-muted">{meta.description}</p>

      <div className="mt-10">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="border border-dashed border-border px-6 py-10 text-center text-sm text-muted">
            아직 글이 없습니다.{" "}
            <code className="text-foreground">content/{category}/</code> 폴더에
            MDX 파일을 추가해 보세요.
          </p>
        )}
      </div>
    </section>
  );
}
