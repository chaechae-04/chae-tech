import Link from "next/link";
import { getCategoryLabel } from "@/lib/categories";
import { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-border py-6 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
        <Link
          href={`/category/${post.category}`}
          className="text-accent transition-colors hover:text-accent-hover"
        >
          {getCategoryLabel(post.category)}
        </Link>
        <span>·</span>
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h2 className="text-lg font-medium text-foreground">
        <Link
          href={`/posts/${post.slug}`}
          className="transition-colors hover:text-accent"
        >
          {post.title}
        </Link>
      </h2>

      {post.description && (
        <p className="mt-2 text-sm leading-6 text-muted">{post.description}</p>
      )}

      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
