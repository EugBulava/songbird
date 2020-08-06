import React from 'react';
import { store } from '../../core/store';
import { resetLevel, reserAnswer } from '../header/catigories/catigories-redux/catigories-actions';
import { resetScore } from '../header/score/score-redux/score-actions';
import { desableButton } from '../nextLevelButton/nextLevelButton-redux/nextLevelButton-actions';
import { startGame } from '../answers/answers-redux/answers-actions';

export function WinGame() {
  function playAudio() {
    const audioWin = new Audio();
    audioWin.preload = 'auto';
    audioWin.src = 'https://zvukipro.com/uploads/files/2019-09/1569138069_db344f8d1a8d5b5.mp3';
    audioWin.play();
  }

  playAudio();

  function restartGame() {
    //debugger
    store.dispatch(resetLevel());
    store.dispatch(resetScore());
    store.dispatch(reserAnswer());
    store.dispatch(desableButton());
    store.dispatch(startGame());
  }

  //const [button, setButton] = useState((<div></div>));

  // setTimeout(() => {
  //   setButton((<button className="next-level-button repeat-game" onClick={restartGame}>Играть снова!</button>));
  // },5000)

  return (<div className = "questions-end-game questions-win-game">
    <img alt="mem" src="https://cs8.pikabu.ru/post_img/2016/11/10/10/1478799888167385024.jpg"></img>
    <span className="win-win-text">Tеперь ты знаешь, кто чирикнул!</span>
    <button className="next-level-button repeat-game" onClick={restartGame}>Играть снова!</button>
  </div>);
}