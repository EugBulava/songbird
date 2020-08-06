import React, { useState } from 'react';
import { store } from '../../../core/store';

export function Score() {
  const [score,setScore] = useState(store.getState().scoreReducer.score);

  store.subscribe(() => {
    setScore(store.getState().scoreReducer.score);
  })

  return (<span className="score">Score: {score}</span>)
}