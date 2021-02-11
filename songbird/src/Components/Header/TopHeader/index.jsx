import React from 'react';

import { Logo } from './Logo';
import { Score } from './Score';

import styles from './styles.module.css';

export const TopHeader = () => {

  return (
    <div className={styles['top-header']}>
      <Logo />
      <Score />
    </div>
  )
}