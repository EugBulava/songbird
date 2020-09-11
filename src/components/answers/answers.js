import React from 'react';
import { Choice } from './choice/choice';
import { AboutBird } from './about-bird/about-bird';

export function Answers() {
  return (<div className="answers">
    <Choice />
    <AboutBird />
  </div>)
}