# Storybook UI

## About

이 프로젝트는 디자인 시스템 일부인 스토리북 UI Kit입니다.
Nx 기반의 모노레포 구조로 구성되어 있으며, React를 사용해 제작되었습니다.
GitHub Pages를 통해 Storybook을 배포합니다.

## Tech Stack

- **UI Libary/Framework:** React
- **Styling:** css , emotion
- **Bundler:** Vite
- **Build System / Monorepo:** Turbo Repo
- **Deployment:** Vercel

---

## Setting Up

```shell
pnpm install
pnpm dev

vercel --prod
```

## 커밋 규칙

- 커밋 메시지는 한글로 작성
- 커밋 메시지는 다음과 같은 형식으로 작성

```bash

feat: 새로운 기능/화면 추가
fix: 버그 수정
refactor: 코드 리팩토링 (기능 변경 없음)
style: 코드 포맷팅, 세미콜론 등 (기능 변경 없음)
test: 테스트 추가 / 수정
chore: 기타 잡다한 작업 (빌드 설정, 패키지 업그레이드 등)
```
