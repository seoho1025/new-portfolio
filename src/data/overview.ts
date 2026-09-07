/* index 부분에서 카드가 넘어가는 부분*/
/* Scroll에 따라서 카드에서 강조되는 부분*/

export type DescSegement = { text: string; emphasis?: boolean };

export type OverviewStep = {
  sectionId: string;
  title: string;
  description: DescSegement[];
};

export const overviewSteps: OverviewStep[] = [
  {
    sectionId: "about",
    title: "About",
    description: [
      { text: "어떤 " },
      { text: '"사람" ', emphasis: true },
      { text: "이고 " },
      { text: "무엇을 " },
      { text: '"지향" ', emphasis: true },
      { text: "하는지" },
    ],
  },
   {
    sectionId: 'skills',
    title: 'Skills',
    description: [
      { text: '사용하는 ' },
      { text: '"기술"', emphasis : true },
      { text: '과 ' },
      { text: '"숙련도"', emphasis: true },
    ],
  },
  {
    sectionId: 'projects',
    title: 'Projects',
    description: [
      { text: '직접 만든 ' },
      { text: '"프로젝트"', emphasis: true },
      { text: '와 ' },
      { text: '"회고"', emphasis: true },
    ],
  },
  {
    sectionId: 'career',
    title: 'Career',
    description: [
      { text: '인턴 · 활동 · 부트캠프 ' , emphasis: true },
      { text: '이력' },
    ],
  },
];
