# URBANKING GitHub Pages

`https://urbanking.github.io/`에 게시할 수 있도록 만든 정적 학술 개인 홈페이지 기본 구조입니다.
참고 사이트의 학술 포트폴리오와 Paper Materials 구성을 가져오되, 별도 빌드 도구나 Jekyll 설치 없이 바로 작동하도록 구성했습니다.

## 포함된 페이지

- `/` — 소개, 연구 방향, Paper Materials, 최근 소식
- `/about/` — 연구 관점과 자기소개
- `/research/` — 주요 연구 주제
- `/publications/` — 논문과 발표 목록
- `/materials/` — 논문 보조자료 모음
- `/papermaterials/sample-study/` — 인터랙티브 연구 페이지 예시
- `/cv/` — 학력·경력·CV
- `/404.html` — 사용자 지정 오류 페이지

## 먼저 바꿀 내용

1. 모든 페이지의 `URBANKING`을 공개할 이름 또는 브랜드로 바꿉니다.
2. `about/index.html`에 소속, 직위, 짧은 자기소개와 외부 프로필 링크를 추가합니다.
3. `publications/index.html`의 예시 항목을 실제 논문 서지정보로 교체합니다.
4. `cv/index.html`에 학력과 경력을 입력합니다.
5. CV PDF가 있으면 `assets/cv.pdf`로 추가하고 CV 페이지에 다운로드 링크를 연결합니다.
6. 실제 인터랙티브 그래프가 있으면 `assets/interactive-demo.html`을 교체합니다.

## GitHub Pages 게시

1. `URBANKING` 계정 또는 조직에 공개 저장소 `URBANKING.github.io`를 만듭니다.
2. 이 폴더의 파일을 저장소 `main` 브랜치 최상위에 올립니다.
3. 저장소의 `Settings → Pages`에서 `Deploy from a branch`, `main`, `/(root)`를 선택합니다.
4. 게시가 끝나면 `https://urbanking.github.io/`에서 확인합니다.

GitHub Pages 반영에는 몇 분이 걸릴 수 있습니다.

## 파일 구조

```text
.
├── index.html
├── about/index.html
├── research/index.html
├── publications/index.html
├── materials/index.html
├── papermaterials/sample-study/index.html
├── cv/index.html
├── 404.html
└── assets/
    ├── css/style.css
    ├── js/site.js
    └── interactive-demo.html
```

모든 내부 링크는 `URBANKING.github.io`의 루트 주소를 기준으로 작성되어 있습니다.
