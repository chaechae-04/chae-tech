# chae-tech

채채와 함께하는 기술 투자 일지. 기초·웹 개발·알고리즘·프로젝트 회고를 기록하는 테크 블로그입니다.

**목표:** 겨울방학 인턴 준비 — 알고리즘 정리 + 웹 개발 포트폴리오

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX (`gray-matter` + `next-mdx-remote`)

## 글 작성하기

`content/` 아래 카테고리 폴더에 `.mdx` 파일을 추가합니다.

```
content/
  fundamentals/   # 기초 · 동작 원리
  web/            # 웹 개발
  algo/           # 알고리즘
  project/        # 프로젝트 회고
```

frontmatter 예시:

```mdx
---
title: "글 제목"
description: "한 줄 요약"
date: "2025-07-01"
category: web
tags: ["Next.js", "React"]
---

본문을 작성합니다.
```

## 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인

## 배포

- **프론트/블로그:** Vercel
- **백엔드 (필요 시):** OCI 서버

## License

MIT
