import React from 'react';

import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode,
    title?: string
}

function Card({ children, title }: CardProps) {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;
