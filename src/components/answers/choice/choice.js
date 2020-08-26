import React, { useState } from 'react';
import { store } from '../../../core/store';
import { birdsData } from '../../../constants/birds';
import { enableButton } from '../../nextLevelButton/nextLevelButton-redux/nextLevelButton-actions';
import { scorePlusFive, scorePlusOne, scorePlusFour, scorePlusThree, scorePlusTwo } from '../../header/score/score-redux/score-actions';
import { showBirdOne, showBirdTwo, showBirdThree, showBirdFour, showBirdFive, showBirdSix } from '../answers-redux/answers-actions';

export function Choice() {
  const [answers, setAnswers] = useState(birdsData[store.getState().catigoriesReducer.level-1]);

  store.subscribe(() => {
    setAnswers(birdsData[store.getState().catigoriesReducer.level-1]);
  })

  function madeChoice(event) {
    const elements = ['bird-choice-first', 'bird-choice-second', 'bird-choice-third', 'bird-choice-fourth', 'bird-choice-fifth', 'bird-choice-last'];
    const actions = [showBirdOne, showBirdTwo, showBirdThree, showBirdFour, showBirdFive, showBirdSix];

    elements.forEach((elem, i) => {
      if(event.target.classList.contains(elem)){
        store.dispatch(actions[i]());
      }
    })

    if(event.target.innerText !== store.getState().catigoriesReducer.answer.name){
      if(!event.target.hasAttribute('clicked')){
        event.target.firstChild.style = 'background-color: red';
        event.target.setAttribute('clicked','')
        const audioFail = new Audio();
        audioFail.preload = 'auto';
        audioFail.src = 'https://birds-quiz.netlify.app/static/media/error.165166d5.mp3';
        audioFail.play();
      }
    } else {
      if(!event.target.hasAttribute('clicked')) {
        event.target.firstChild.style = 'background-color: green'
        store.dispatch(enableButton());

        //document.querySelector('.about-bird').querySelector('.audio-player').pause();

        const events = [scorePlusFive,scorePlusFour, scorePlusThree, scorePlusTwo, scorePlusOne];

        let clickedElements = 0;
        document.querySelectorAll('.bird-choice').forEach((el) => {
          if(el.hasAttribute('clicked')){
            clickedElements++;
          }
        })
        if(clickedElements<5) {
          store.dispatch(events[clickedElements]());
        }

        document.querySelectorAll('.bird-choice').forEach((el) => {
          el.setAttribute('clicked','');
        })
        const audioWin = new Audio();
        audioWin.preload = 'auto';
        audioWin.src = 'https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3';
        audioWin.play();
      }
    }
  }

  return (<ul className="choice">
    <li className="bird-choice bird-choice-first" onClick={madeChoice}><div className="point"></div>{answers[0].name}</li>
    <li className="bird-choice bird-choice-second" onClick={madeChoice}><div className="point"></div>{answers[1].name}</li>
    <li className="bird-choice bird-choice-third" onClick={madeChoice}><div className="point"></div>{answers[2].name}</li>
    <li className="bird-choice bird-choice-fourth" onClick={madeChoice}><div className="point"></div>{answers[3].name}</li>
    <li className="bird-choice bird-choice-fifth" onClick={madeChoice}><div className="point"></div>{answers[4].name}</li>
    <li className="bird-choice bird-choice-last" onClick={madeChoice}><div className="point"></div>{answers[5].name}</li>
  </ul>)
}