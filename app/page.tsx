import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { CATEGORIES } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
          Welcome
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          채채의 기술 투자 일지
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400">
          기초부터 새 기술까지, 배운 것을 기록하는 테크 블로그입니다. 알고리즘
          정리와 웹 개발 포트폴리오를 겨울방학 인턴 준비까지 이어갑니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Categories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="rounded-2xl border border-stone-200 bg-white px-5 py-4 transition-all hover:border-amber-200 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-900"
            >
              <p className="font-semibold text-stone-900 dark:text-stone-50">
                {category.label}
              </p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Recent Posts
        </h2>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
