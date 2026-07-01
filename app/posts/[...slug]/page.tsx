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
    title: post.title,
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
        className="text-sm text-accent transition-colors hover:text-accent-hover"
      >
        {getCategoryLabel(post.category)}
      </Link>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        {post.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      {post.description && (
        <p className="mt-5 text-base leading-7 text-muted">{post.description}</p>
      )}

      <div className="mt-10 border-t border-border pt-10">
        <MdxContent source={post.content} />
      </div>
    </article>
  );
}
