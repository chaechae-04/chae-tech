import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { CATEGORIES } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          CHAE-TECH
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          배운 것을 기록하는 테크 블로그입니다. <br />
          알고리즘 정리와 웹 개발 포트폴리오를 겨울방학 인턴 준비까지 이어갑니다.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-sm text-muted">카테고리</h2>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="bg-background px-5 py-4 transition-colors hover:bg-zinc-900/50"
            >
              <p className="font-medium text-foreground">{category.label}</p>
              <p className="mt-1 text-sm text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm text-muted">최근 글</h2>
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
