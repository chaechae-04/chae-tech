import { MDXRemote } from "next-mdx-remote/rsc";

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-blog max-w-none prose-headings:scroll-mt-24 prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-foreground prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-border">
      <MDXRemote source={source} />
    </div>
  );
}
