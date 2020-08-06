import React, { useState } from 'react';
import { store } from '../../../core/store';
import { birdsData } from '../../../constants/birds';

export function AboutBird() {
  const [content, setContent] = useState((<div><p className="about-bird-text">Послушайте плеер.</p>
  <p className="about-bird-text">Выберите птицу из списка</p></div>));

  store.subscribe(() => {
    const birds = ['bird-1','bird-2','bird-3','bird-4','bird-5','bird-6'];

    birds.forEach((elem, i) => {
      if(elem === store.getState().answersReducer.aboutBird) {
        const img = birdsData[store.getState().catigoriesReducer.level-1][i].image;
        const audio = birdsData[store.getState().catigoriesReducer.level-1][i].audio;
        const name = birdsData[store.getState().catigoriesReducer.level-1][i].name;
        const species = birdsData[store.getState().catigoriesReducer.level-1][i].species;
        const text = birdsData[store.getState().catigoriesReducer.level-1][i].description;

        setContent((<div><div className="about-bird-block">
          <img alt="Bird" src={img}></img>
          <div className="all-about-bird">
            <div className="name-of-bird">{name}</div>
            <div className="species">{species}</div>
            <audio className="audio-about-bird" controls src={audio}>Your browser does not support the<code>audio</code> element.</audio>
          </div>
        </div><p className="text-about-bird">{text}</p></div>));
      }
    })

    if(store.getState().answersReducer.aboutBird === 'text') {
      setContent((<div><p className="about-bird-text">Послушайте плеер.</p>
      <p className="about-bird-text">Выберите птицу из списка</p></div>))
    }
  })

  return (<div className="answer-about-bird">
    {content}
  </div>)
}