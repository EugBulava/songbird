import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

const ScoreComponent = ({ score }) => {

  return (
    <span className={styles.score}>Score: {score}</span>
  )
}

const mapStateToProps = (state) => ({
  score: state.game.score
});

export const Score = connect(mapStateToProps, null)(ScoreComponent)