import type { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  id: string;
  title?: string;
  children?: ReactNode;
};

/* 일반 섹션이 공통되게 적용될 수 있도록 지정 */
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
