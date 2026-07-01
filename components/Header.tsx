import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground transition-colors hover:text-accent"
        >
          chae-tech
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-3 w-px bg-border sm:block" />
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="transition-colors hover:text-accent"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
