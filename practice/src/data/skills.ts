export type SkillItem = {
    name : string;
    resone : string;
};

export type SkillCard = {
    id : string;
    label : string;
    items : SkillItem[];
};

export const skills : SkillCard[] = [
    {
        id : 'FE',
        label :'frontend',
        items : [
            { name : 'React', resone : '컴포넌트 설계와 렌더링 최적화' },
            { name : 'Next.js', resone : 'SSR도입으로 초기 렌더링 개선' },
            { name : 'ReactNative(expo)', resone : '크로스 앱 개발'},
            { name : 'HTML' , resone : '웹 개발을 진행' },
            { name : 'TailWind' , resone : '디자인 토큰화로 컴포넌트 재사용률 개선' },
            { name : 'Css', resone : 'HTML을 css로 디자인' },
            { name : 'Zustand', resone : '상태관리 라이브러리 적용' },
            { name : 'Redux', resone : '상태 관리 라이브러리 비교 적용, 보일러 플레이트 감소' },
            { name : 'TypeScript', resone : '타입 정의로 런타임 에러 감소' },
            { name : 'JavaScript', resone : '비동기 처리 및 DOM 조작' }
        ],
    },

    {
        id : 'BE',
        label : 'backend',
        items : [
            { name : 'SpringBoot', resone : 'RestAPI 설계 및 구현' },
            { name : 'Fast API', resone : '비동기 서버 API 구축' },
            { name : 'PostSQL / MySQL', resone : '스키마 설계 및 쿼리 최적화' },
            { name : 'Docker', resone : '로컬 개발 환경 통일' },
            { name : 'AWS' , resone : '배포 및 운영 환경 개선' },
            { name : 'Java', resone : 'Spring 기반 REST API 구성' },
        ],
    },

    {
        id : 'Tools',
        label : 'tools',
        items : [
            { name : 'GitHub', resone : '브랜치 전략 기반 협력' },
            { name : 'Figma', resone : '시안 제작부터 개발까지 직접 연결' },
            { name : 'Slack' , resone : '스크럽을 통한 협력' },
            { name : 'Jira', resone : '에자일 방식을 통해 한달 개발 방향성 잡기' },
            { name : 'Notion', resone : '회의록 정리 및 앞으로 방향성 제시' },
            { name : 'Discord', resone : '회의 진행을 디스코드로 진행'},
        ],
    },
]; 