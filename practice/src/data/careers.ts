export type CareerType = 'intern' | 'hackathon' | 'activity' | 'bootcamp';

export type CareerItem = {
  title: string;
  period: string;
  description: string;
};

export type Career = {
  type: CareerType;
  name: string;
  logo: string;
  period: string;
  quote: string;
  roles: string[];
  awardScale: string;
  items: CareerItem[];
};

export const careers: Career[] = [
  {
    type: 'hackathon',
    name: 'MOVE AI CHALLENGE 2026',
    logo: '/images/careers/move-ai.png',
    period: '2026.07 - 2026.08',
    quote: '불확실한 정보를 숨기지 않고 화면에 정직하게 드러내는 법을 배웠습니다.',
    roles: ['프론트엔드'],
    awardScale: 'TODO: 본선 진출 / 수상 여부를 작성',
    items: [
      {
        title: 'KICE Quote — 국제복합운송 AI 견적 시스템',
        period: '2026.07 - 2026.08',
        description:
          '견적을 확정·잠정으로 이원화해 산출하는 서비스 (Frontend)',
      },
    ],
  },
  {
    type: 'hackathon',
    name: '한이음 ICT멘토링',
    logo: '/images/careers/hanium.png',
    period: '2025.02 - 2025.08',
    quote: '팀원 간 협력과 의사소통의 중요성을 몸소 배우며 공모전 제출까지 완수했습니다.',
    roles: ['기획', 'UI/UX', '프론트엔드'],
    awardScale: 'TODO: 수상 여부를 작성',
    items: [
      {
        title: 'AI 기반 여행일기',
        period: '2025.02 - 2025.08',
        description:
          '사진과 감정 분석으로 여행 일기를 자동 생성하는 앱 (기획, UI/UX, Frontend)',
      },
    ],
  },
  {
    type: 'bootcamp',
    name: '현대오토에버 모빌리티 스쿨',
    logo: '/images/careers/hyundai-autoever.png',
    period: '2026.06 - 2026.12',
    quote: 'TODO: 과정을 통해 얻은 것을 한 문장으로 요약',
    roles: ['TODO: 수강 트랙을 작성'],
    awardScale: 'TODO: 수료 / 우수 수료 등 결과를 작성',
    items: [
      {
        title: 'TODO: 과정명 또는 팀 프로젝트명을 작성',
        period: '2026.06 - 2026.12',
        description: 'TODO: 한 줄 설명 (담당 역할)',
      },
    ],
  },
  {
    type: 'activity',
    name: 'CJ 프레시웨이 공모전',
    logo: '/images/careers/cj-freshway.png',
    period: 'TODO: 진행 기간을 작성',
    quote: 'TODO: 이 활동을 한 문장으로 요약',
    roles: ['기획', '자료조사', 'PPT'],
    awardScale: '최우수상',
    items: [
      {
        title: '신제품 활용 아동 프로그램 · 상품 기획',
        period: 'TODO: 진행 기간을 작성',
        description: '신제품을 활용한 아동 대상 프로그램 및 상품 기획 (기획, PPT)',
      },
    ],
  },
  {
    type: 'activity',
    name: '제5회 링글 서비스 기획 & 마케팅 공모전',
    logo: '/images/careers/ringle.png',
    period: '2025.01 - 2026.01',
    quote: 'AI 기술 요소가 실제 서비스와 어떻게 연결되는지 시야를 넓혔습니다.',
    roles: ['기획', '자료조사', 'UI/UX', 'PPT'],
    awardScale: 'TODO: 수상 여부를 작성',
    items: [
      {
        title: 'RINGLE PERSONAI',
        period: '2025.01 - 2026.01',
        description:
          '문서 기반 맞춤형 AI 영어 회화 학습 플랫폼 기획 (기획, UI/UX, PPT)',
      },
    ],
  },
  {
    type: 'activity',
    name: 'NH 농협은행 AI 아이디어 챌린지',
    logo: '/images/careers/nh-bank.png',
    period: '2025.09 - 2025.10',
    quote: 'AI를 금융 서비스에 어떻게 적용할 수 있는지 구체적으로 이해했습니다.',
    roles: ['기획', '자료조사', 'UI/UX', 'PPT'],
    awardScale: 'TODO: 수상 여부를 작성',
    items: [
      {
        title: 'NAHI!',
        period: '2025.09 - 2025.10',
        description:
          '2030세대 가치소비 맞춤형 AI 자산관리 서비스 기획 (기획, UI/UX, PPT)',
      },
    ],
  },
];