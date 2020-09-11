import React from 'react';
import { BirdImage } from './bird-image/bird-image';
import { BirdName } from './bird-name/bird-name';
import { BirdAudio } from './bird-audio/bird-audio';

export function Questions() {
  return (<div className = "questions">
    <div className="bird-image">
      <BirdImage />
    </div>
    <div className="about-bird">
      <BirdName />
      <BirdAudio />
    </div>
  </div>);
}