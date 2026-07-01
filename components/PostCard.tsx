import Link from "next/link";
import { getCategoryLabel } from "@/lib/categories";
import { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-amber-200 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-900">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
        <Link
          href={`/category/${post.category}`}
          className="rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
        >
          {getCategoryLabel(post.category)}
        </Link>
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
        <Link
          href={`/posts/${post.slug}`}
          className="transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-300"
        >
          {post.title}
        </Link>
      </h2>

      {post.description && (
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
          {post.description}
        </p>
      )}

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-2 py-0.5 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
