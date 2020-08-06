import React, { useState } from 'react';
import { store } from '../../../core/store';

export function BirdAudio() {
  const [answer, setAnswer] = useState(store.getState().catigoriesReducer.answer);

  store.subscribe(() => {
    setAnswer(store.getState().catigoriesReducer.answer);
  })

  return (<audio
        controls
        src={answer.audio}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>)
}