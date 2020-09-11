import React from 'react';
import { store } from "../../core/store";
import { startGame } from '../answers/answers-redux/answers-actions';
import { resetScore } from '../header/score/score-redux/score-actions';
import { resetLevel, reserAnswer } from '../header/catigories/catigories-redux/catigories-actions';
import { desableButton } from '../nextLevelButton/nextLevelButton-redux/nextLevelButton-actions';

export function EndGame() {

  function restartGame() {
    //debugger
    store.dispatch(resetLevel());
    store.dispatch(resetScore());
    store.dispatch(reserAnswer());
    store.dispatch(desableButton());
    store.dispatch(startGame());
  }

  return (<div className = "questions-end-game">
    <h1 className="present-text">Поздравляем!</h1>
    <span className="win-text">Вы прошли викторину и набрали <span className="score-number">{store.getState().scoreReducer.score}</span> из <span className="score-number">30</span> возможных баллов</span>
    <button className="next-level-button repeat-game" onClick={restartGame}>Попробовать еще раз!</button>
  </div>);
}