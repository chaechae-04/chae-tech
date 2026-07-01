import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/MdxContent";
import { getCategoryLabel } from "@/lib/categories";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug.join("/"));

  if (!post) return { title: "글을 찾을 수 없습니다" };

  return {
    title: `${post.title} | chae-tech`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug.join("/"));

  if (!post) notFound();

  return (
    <article>
      <Link
        href={`/category/${post.category}`}
        className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
      >
        {getCategoryLabel(post.category)}
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {post.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      {post.description && (
        <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-stone-400">
          {post.description}
        </p>
      )}

      <div className="mt-10 border-t border-stone-200 pt-10 dark:border-stone-800">
        <MdxContent source={post.content} />
      </div>
    </article>
  );
}
