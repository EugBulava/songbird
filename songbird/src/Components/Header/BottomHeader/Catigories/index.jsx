import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

const CatigoriesComponent = ({level, categories}) => {

  return (
    <ul className={styles['category-list']}>
      {categories.map((el, idx) => {
        return idx === level ? <li className={`${styles.category} ${styles.active}`} key={idx}>{el}</li> : <li className={styles.category} key={idx}>{el}</li>
      })}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  level: state.game.level,
  categories: state.game.categories
})

export const Catigories = connect(mapStateToProps, null)(CatigoriesComponent);
