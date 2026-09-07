/* Gnb 안에 들어가는 section을 한 곳에 정리*/

export const SECTIONS=[
    {id : 'hero', label : 'Home', nav : false }, /* nav = Gnb에 노출 여부*/
    {id : 'about', label : 'About', nav : true},
    {id : 'skills', label : 'Skills', nav: true},
    {id : 'project', label : 'Projects', nav : true},
    {id : 'career', label : 'Career', nav : true},
]as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

//Gnb에 노출할 항목 
export const NAV_SECTIONS = SECTIONS.filter((s) => s.nav);

//Gnb에 떠있는 항목들이 페이지를 넘길 때마다 강조 되도록 설정 
export const SECTION_IDS = SECTIONS.map((s) => s.id);