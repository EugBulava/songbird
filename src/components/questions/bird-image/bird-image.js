import React, { useState } from 'react';
import { store } from '../../../core/store';

export function BirdImage() {
  let visible = store.getState().nextLevelButtonReducer.nextLevelButton;

  const preImgUrl = 'https://img14.postila.ru/resize?w=660&src=%2Fdata%2F39%2F63%2F2a%2F71%2F39632a71f36c1c5c01dd4e7a7f2c8c61542f7ec5564d74923a1e073ed463c6fb.png';

  const [imgUrl, setImgUrl] = useState(preImgUrl);
  
  store.subscribe(() => {
    visible = store.getState().nextLevelButtonReducer.nextLevelButton;

    if(visible === 'enabled') {
      setImgUrl(store.getState().catigoriesReducer.answer.image);
    } else {
      setImgUrl(preImgUrl);
    }
  })

  return (<img alt="Bird" src = {imgUrl}></img>)
}