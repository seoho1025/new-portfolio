//프로젝트 디테일한 부분 잡기
export type ProjectLink = {
  label: string;
  url: string;
};

export type TroubleShooting = {
  problem: string;
  cause: string;
  failedAttempt: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string; /*URL이나 식별자로 쓰기 좋게 다듬은 짧은 문자열*/
  title: string;
  parts: string;
  thumbnail: string;
  featured: boolean;
  stack: string[];
  period: string;
  team: string;
  role: string;
  overview: string;
  retro: string;
  troubles: TroubleShooting[];
  links: ProjectLink[];
  host?: string;
  award?: string;
};

// placeholder — 실제 프로젝트로 교체하세요.
export const projects: Project[] = [
  {
    slug: "ward",
    title: "Ward",
    parts: "기획 · 프론트엔드 · 백엔드 · 배포",
    thumbnail: "/images/projects/ward/thumbnail.png",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Riot Games API",
      "YouTube Data API",
      "AI API",
      "Vercel",
    ],
    period: "2026.02 ~ 진행중",
    team: "1인 개인 프로젝트",
    role: "기획, 디자인, 개발, 배포 전 과정 담당",
    overview:
      "LCK 선수들의 생년월일을 기반으로 사주를 분석해 당일 운세와 경기 승패를 예측하고, AI가 선수별 한줄 총평을 제공하는 웹 서비스입니다. 경기·선수 관련 질문에 답변하는 AI 챗봇과 팀별 유튜브 영상을 한곳에서 모아보는 기능을 함께 제공해, 사주와 e스포츠를 결합한 팬 콘텐츠 플랫폼을 지향합니다.",
    retro:
      "기획부터 배포까지 개발의 전반적인 과정을 혼자 경험했습니다. AI API 연동, 외부 데이터 가공, 프론트엔드와 백엔드의 연결 방식 등 서비스 하나가 완성되기까지 필요한 다양한 과정을 몸으로 익힐 수 있었습니다.",
    troubles: [
      {
        problem: "AI API 연동 중 401 인증 오류가 발생해 응답을 받지 못함",
        cause: "결제 수단 미등록으로 API 크레딧이 부족한 상태였음",
        failedAttempt: "TODO: 실제로 먼저 시도했던 방법을 작성",
        solution: "결제 정보를 등록하고 크레딧을 충전해 정상 호출 처리",
        result: "AI 총평 생성 기능이 정상 동작하도록 복구",
      },
      {
        problem:
          "Riot Games API 연동 중 CORS 오류 및 Rate Limit 초과 문제가 반복 발생",
        cause:
          "브라우저에서 외부 API를 직접 호출했고, 요청 횟수를 제어하는 로직이 없었음",
        failedAttempt: "TODO: 실제로 먼저 시도했던 방법을 작성",
        solution:
          "서버 사이드에서 API 요청을 처리하는 방식으로 구조를 변경해 CORS를 해결하고, 요청 횟수 제한 로직을 추가",
        result:
          "안정적인 데이터 호출이 가능해졌고 Rate Limit 초과 문제가 해소됨",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/seoho1025/Ward" },
      { label: "배포", url: "https://lck-fortune.vercel.app" },
    ],
  },
  {
    slug: "ai-travel-diary",
    title: "AI 기반 여행일기",
    parts: "기획 · UI/UX · 프론트엔드",
    thumbnail: "/images/projects/ai-travel-diary/thumbnail.png",
    featured: true,
    stack: ["React Native", "TypeScript", "Expo", "Figma"],
    period: "2025.02.22 ~ 2025.08.30",
    team: "5인 팀 프로젝트",
    role: "서비스 기획 및 요구사항 정의, Figma를 활용한 UI/UX 디자인, React Native / TypeScript 프론트엔드 개발, API 명세서 작성 및 백엔드 협업",
    overview:
      "사진과 표정(감정)만으로 여행 일기와 동선을 자동 생성하고, 실시간 장소 추천 및 동행자와의 공동 기록을 지원하는 AI 기반 맞춤형 여행 파트너 애플리케이션입니다.",
    retro:
      "팀원 간 협력과 의사소통의 중요성을 몸소 배우며 공모전 제출까지 완수할 수 있었습니다. AI 기반 여행 일기 생성 기능을 구현하고 일기 품질을 개선하는 과정에서 성취감을 느꼈습니다.",
    troubles: [
      {
        problem: "iOS 환경에서 지도 기능이 아예 동작하지 않는 오류 발생",
        cause: "네이티브 빌드에 지도 관련 모듈이 포함되지 않은 상태에서 실행",
        failedAttempt: "TODO: 실제로 먼저 시도했던 방법을 작성",
        solution:
          "Cursor로 오류 로그를 분석해 원인을 파악하고, 빌드 구조를 직접 변경해 해결",
        result:
          "단순 코드 수정이 아닌 빌드 환경 자체를 이해하는 것이 중요하다는 것을 깨달음",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/seoho1025/TravelDiary.git" },
    ],
  },
  {
    slug: "kice-quote",
    title: "KICE Quote — 국제복합운송 AI 견적 시스템",
    parts: "프론트엔드",
    thumbnail: "/images/projects/kice-quote/thumbnail.png",
    featured: true,
    stack: ["React", "TypeScript", "Claude API"],
    period: "2026.07.22 ~ 2026.08.16",
    team: "4인 팀 프로젝트 (기획·PM / 백엔드·데이터 / 프론트엔드 / AI·프롬프트 설계)",
    role: "프론트엔드 개발",
    overview:
      "MOVE AI CHALLENGE 2026 본선 출품작으로, 화주가 출발·도착지, 규격·수량, 날짜, 품목 4가지만 입력하면 국제복합운송 견적서를 즉시 산출하는 시스템입니다. 공개 요율로 계산 가능한 구간은 확정 금액으로, 산출식이 비공개인 구간은 근거 있는 범위로 이원화해 표기하고, 모든 금액에 산식·출처·갱신시각과 '왜 확정할 수 없는가'를 연결한 근거 패널을 제공합니다.",
    retro:
      "불확실한 정보를 숨기지 않고 화면에서 어떻게 정직하게 드러낼지를 고민한 프로젝트였습니다. 확정과 잠정을 배지로 강제 구분하고 모든 금액을 한 번의 클릭으로 근거까지 도달하게 만드는 과정에서, UI가 곧 서비스의 신뢰도를 결정한다는 것을 체감했습니다.",
    troubles: [
      {
        problem:
          "구간 단위가 아닌 항목 단위로 확정과 잠정이 섞여 있어, 사용자가 견적의 신뢰도를 판단하기 어려움",
        cause:
          "금액 표기 방식이 화면마다 통일되어 있지 않아 어떤 금액이 확정인지 구분되지 않았음",
        failedAttempt: "TODO: 실제로 먼저 시도했던 방법을 작성",
        solution:
          "금액이 노출되는 모든 위치에 배지를 강제하고, 구간 헤더에 확정 비율(%)을 표기하도록 설계",
        result:
          "접힌 상태에서도 구간별 신뢰도를 판단할 수 있게 되었고, 잠정 항목은 범위로만 표기하는 규칙을 화면 전반에 통일",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/febbyy0000/MOVE-AI_Q-RAIL.git",
      },
      {
        label: "배포",
        url: "https://move-ai-q-rail-git-front-51541759667.asia-northeast3.run.app/",
      },
    ],
  },
  {
    slug: "ringle-personai",
    title: "링글 AI 서비스 기획 (RINGLE PERSONAI)",
    parts: "기획 · 자료조사 · UI/UX · PPT",
    thumbnail: "/images/projects/ringle-personai/thumbnail.png",
    featured: false,
    stack: ["Figma", "PowerPoint"],
    period: "2025.01.02 ~ 2026.01.16",
    team: "3인 팀 프로젝트",
    role: "서비스 기획 및 요구사항 정의, Figma를 활용한 UI/UX 디자인 및 PPT 제작",
    overview:
      "제5회 링글 서비스 기획 & 마케팅 공모전 출품작입니다. 사용자 문서 데이터를 분석해 개인 맞춤형 영어 회화 주제를 자동 생성하고, 실시간 문장 정확도 측정과 원어민 표현 학습을 결합한 AI 영어 회화 서비스를 기획했습니다. PDF·PPTX·JPG 파일 업로드 기반의 맞춤 대화, 실시간 문장 완성도 표시, 맥락 속 표현 학습 기능을 핵심으로 설계했습니다.",
    retro:
      "AI TTS 기술을 서비스에 어떻게 적용할 수 있는지 구체적으로 이해하게 되었고, AI 기반 기능 기획 과정에서 자연어 처리, 음성 합성 등 다양한 AI 기술 요소들이 실제 서비스와 어떻게 연결되는지 시야를 넓힐 수 있었습니다.",
    troubles: [],
    links: [],
  },
  {
    slug: "nh-nahi",
    title: "NH 농협은행 AI 아이디어 챌린지 (NAHI!)",
    parts: "기획 · 자료조사 · UI/UX · PPT",
    thumbnail: "/images/projects/nh-nahi/thumbnail.png",
    featured: false,
    stack: ["Figma", "PowerPoint"],
    period: "2025.09.01 ~ 2025.10.25",
    team: "2인 팀 프로젝트",
    role: "서비스 기획 및 요구사항 정의, 자료조사, Figma를 활용한 UI/UX 디자인",
    overview:
      "AI 기반 소비 패턴 분석과 게임화 요소를 결합한 2030 맞춤형 자산관리 서비스 기획 공모전 프로젝트입니다. AI가 카드·계좌 소비내역을 분석해 개인의 취향까지 태깅하고, 목표 달성에 필요한 적금·카드를 맞춤 추천하며, 예상 경비를 퀘스트로 설정해 저축을 게임화하는 라이프 챌린지 기능을 제안했습니다.",
    retro:
      "AI를 서비스에 어떻게 적용할 수 있는지 구체적으로 이해할 수 있었고, 금융 상품에 대한 시야도 넓힐 수 있었습니다.",
    troubles: [],
    links: [],
  },
  {
    slug: "cj-freshway",
    title: "CJ 프레시웨이 공모전 (최우수상)",
    parts: "기획 · 자료조사 · PPT · 발표",
    thumbnail: "/images/projects/cj-freshway/thumbnail.png",
    featured: false,
    stack: ["PowerPoint"],
    period: "TODO: 진행 기간을 작성",
    team: "TODO: 팀 구성을 작성",
    role: "TODO: 담당 업무를 작성",
    overview:
      "CJ 프레시웨이 주최 공모전 출품작으로, 자사 신제품을 활용한 아동 대상 프로그램 기획과 상품 기획을 제안한 프로젝트입니다. 최우수상을 수상했습니다.",
    retro: "TODO: 프로젝트를 진행하며 배운 점을 작성",
    troubles: [],
    links: [],
  },
];
