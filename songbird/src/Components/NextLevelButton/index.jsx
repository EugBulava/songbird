import React from 'react';
import { connect } from 'react-redux';
import { toNextLevel } from '../../reducer/actions';

const NextLevelButtonComponent = ({ toNextLevel, guessed }) => {

  return guessed ? <button onClick={toNextLevel}>Next Level</button> : <button onClick={toNextLevel} disabled>Next Level</button>
}

const mapStateToProps = (state) => ({
  guessed: state.game.guessed
})

const mapDispatchToProps = (dispatch) => ({
  toNextLevel: () => dispatch(toNextLevel())
}) 

export const NextLevelButton = connect(mapStateToProps, mapDispatchToProps)(NextLevelButtonComponent)