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
    title: `${meta.label} | chae-tech`,
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
      <p className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Category
      </p>
      <h1 className="mt-2 text-3xl font-bold text-stone-900 dark:text-stone-50">
        {meta.label}
      </h1>
      <p className="mt-3 text-stone-600 dark:text-stone-400">{meta.description}</p>

      <div className="mt-10 flex flex-col gap-4">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="rounded-2xl border border-dashed border-stone-300 px-6 py-10 text-center text-stone-500 dark:border-stone-700 dark:text-stone-400">
            아직 글이 없습니다. <code className="text-sm">content/{category}/</code>{" "}
            폴더에 MDX 파일을 추가해 보세요.
          </p>
        )}
      </div>
    </section>
  );
}
