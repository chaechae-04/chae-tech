export const metadata = {
  title: "About | chae-tech",
  description: "chae-tech 블로그 소개",
};

export default function AboutPage() {
  return (
    <section className="prose prose-stone max-w-none dark:prose-invert">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-600 not-prose dark:text-amber-400">
        About
      </p>
      <h1>chae-tech</h1>
      <p>
        우리집 고양이 <strong>채채</strong>와 <strong>tech</strong>를 합쳐 만든
        이름입니다. 재테크처럼 들리기도 하지만, 여기서 말하는 투자는 기술에
        시간을 쏟고 기록으로 남기는 일에 가깝습니다.
      </p>

      <h2>무엇을 기록하나요</h2>
      <ul>
        <li>기술의 밑단이 어떻게 동작하고 연결되는지 (Fundamentals)</li>
        <li>웹 개발 학습과 실습 (Web)</li>
        <li>알고리즘 문제 풀이 (Algorithm)</li>
        <li>프로젝트 회고와 배포 경험 (Project)</li>
      </ul>

      <h2>목표</h2>
      <p>
        약 5개월 뒤 겨울방학 인턴을 준비하며, 알고리즘 정리와 웹 개발
        포트폴리오를 함께 쌓는 것이 목표입니다.
      </p>

      <h2>스택</h2>
      <p>
        블로그는 Next.js, TypeScript, Tailwind CSS로 만들었고 Vercel에
        배포할 예정입니다. 백엔드가 필요한 프로젝트는 OCI 서버를 활용할
        계획입니다.
      </p>
    </section>
  );
}
