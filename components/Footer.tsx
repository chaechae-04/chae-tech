export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-8 text-sm text-muted">
        <p>채채와 함께하는 기술 투자 일지</p>
        <p>© {new Date().getFullYear()} chae-tech</p>
      </div>
    </footer>
  );
}
