import type { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProos = {
    id : string;
    title ?: string;
    children?: ReactNode;
};

/* 일반 섹션이 공통되게 적용될 수 있도록 지정 */
export default function Section({ id, title, children }): SectionProps) {
    <div className={styles.section}>
    </div>
}

