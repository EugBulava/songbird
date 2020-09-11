import React, { useState } from 'react';
import { Header } from './components/header/header';
import { Questions } from './components/questions/questions';
import { Answers } from './components/answers/answers';
import { NextLevelButton } from './components/nextLevelButton/nextLevelButton';
import './components/header/header.css'
import './components/answers/answers.css'
import './components/nextLevelButton/nextLevelButton.css'
import './components/questions/questions.css'
import './components/endGame/endGame.css'
import './components/winGame/winGame.css'
import './components/questions/bird-audio/bird-audio.css'
import './components/header/catigories/catigories.css'
import './components/answers/about-bird/about-bird.css'
import { store } from './core/store';
import { EndGame } from './components/endGame/endGame';
import { WinGame } from './components/winGame/winGame';

function App() {
  const [appComponent, setAppComponent] = useState((<div className="wrapper">
    <Header />
    <Questions />
    <Answers />
    <NextLevelButton />
  </div>))

  store.subscribe(() => {
    if(store.getState().answersReducer.endGame === 'true') {
      if(store.getState().scoreReducer.score === 30) {
        setAppComponent((<div className="wrapper">
        <Header />
        <WinGame />
      </div>))} else {
      setAppComponent((<div className="wrapper">
        <Header />
        <EndGame />
      </div>))
      }
    } else if(store.getState().answersReducer.endGame === 'false'){
      setAppComponent((<div className="wrapper">
      <Header />
      <Questions />
      <Answers />
      <NextLevelButton />
    </div>))
    }
  })
  
  return (
    appComponent
  );
}

export default App;
