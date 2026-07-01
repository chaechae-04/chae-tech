import { MDXRemote } from "next-mdx-remote/rsc";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-stone-800 dark:prose-code:bg-stone-800 dark:prose-code:text-stone-100">
      <MDXRemote source={source} />
    </div>
  );
}
