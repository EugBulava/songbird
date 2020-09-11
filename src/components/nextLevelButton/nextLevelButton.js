import React from 'react';
import { useState } from 'react'
import { store } from '../../core/store';
import { toNextLevel, nextAnswer } from '../header/catigories/catigories-redux/catigories-actions';
import { desableButton } from './nextLevelButton-redux/nextLevelButton-actions';
import { showText, endGame } from '../answers/answers-redux/answers-actions';


export function NextLevelButton() {
  const [button, setButton] = useState(store.getState().nextLevelButtonReducer.nextLevelButton);

  store.subscribe(() => {
    setButton(store.getState().nextLevelButtonReducer.nextLevelButton);
  })

  function nextLevel() {
    if(store.getState().catigoriesReducer.level < 6) {
      store.dispatch(toNextLevel());
      store.dispatch(nextAnswer());
      store.dispatch(desableButton());
      store.dispatch(showText());
      document.querySelectorAll('.bird-choice').forEach((el) => {
        el.firstChild.style = '';
        el.removeAttribute('clicked');
      })
    } else {
      store.dispatch(endGame());
    }
  }
  
  if(button === 'disabled') {
    return (<div className="next-level">
    <button className="next-level-button" disabled>Next Level</button>
  </div>);
  } else {
    return (<div className="next-level">
    <button className="next-level-button" onClick={nextLevel}>Next Level</button>
  </div>);
  }
}