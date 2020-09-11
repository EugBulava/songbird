import React, { useState } from 'react';
import { store } from '../../../core/store';

export function BirdName() {
  let visible = store.getState().nextLevelButtonReducer.nextLevelButton;

  const [birdName, setBirdName] = useState('******');

  store.subscribe(() => {
    visible = store.getState().nextLevelButtonReducer.nextLevelButton;

    if(visible === 'enabled') {
      setBirdName(store.getState().catigoriesReducer.answer.name);
    } else {
      setBirdName('******');
    }
  })

  return <span className="bird-name">{birdName}</span>;
}