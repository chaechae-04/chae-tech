import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Tech Blog
          </p>
          <h1 className="text-xl font-bold text-stone-900 transition-colors group-hover:text-amber-700 dark:text-stone-50 dark:group-hover:text-amber-300">
            chae-tech
          </h1>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-4 w-px bg-stone-200 sm:block dark:bg-stone-700" />
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="text-stone-500 transition-colors hover:text-amber-700 dark:text-stone-500 dark:hover:text-amber-300"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
