import React from 'react';

import { BirdsToMatch } from './BirdsToMatch';
import { SelectedBird } from './SelectedBird';

import styles from './styles.module.css';

export const Main = () => {

  return (
    <div className={styles.main}>
      <BirdsToMatch />
      <SelectedBird />
    </div>
  )
}