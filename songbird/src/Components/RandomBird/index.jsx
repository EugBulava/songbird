import React from 'react';
import { connect } from 'react-redux';

const RandomBirdComponent = ({ birds, level, randomBirdId, guessed }) => {

  if(guessed) {
    return (
      <div>
        <img width="100" src={birds[level][randomBirdId].image} alt="bird"/>  
        <span>{birds[level][randomBirdId].name}</span>
        <audio src={birds[level][randomBirdId].audio} controls></audio>
      </div>
    )
  } else {
    return (
      <div>
        <img width="100" src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="bird"/>  
        <span>********</span>
        <audio src={birds[level][randomBirdId].audio} controls></audio>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  birds: state.game.birds,
  level: state.game.level,
  randomBirdId: state.game.randomBirdId,
  guessed: state.game.guessed
})

export const RandomBird = connect(mapStateToProps, null)(RandomBirdComponent);