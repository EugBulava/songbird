import React from 'react';
import { connect } from 'react-redux';
import { selectBird } from '../../../reducer/actions';

import styles from './styles.module.css';

const BirdsToMatchComponent = ({ level, birds, choosenBirdsIds, guessed, randomBirdId, selectBird}) => {

  return (
    <div className={styles['birdList-container']}>
      <ul className={styles.birdsList}>
        {birds[level].map((bird, idx) => {
          if(guessed) {
            if(idx === randomBirdId) {
              return <li className={styles.bird} onClick={selectBird(bird.id)} key={bird.id}><div className={`${styles.circle} ${styles['green-circle']}`}></div>{bird.name}</li>
            } else if(!choosenBirdsIds.includes(idx)) {
              return <li className={styles.bird} onClick={selectBird(bird.id)} key={bird.id}><div className={styles.circle}></div>{bird.name}</li>
            } else {
              return <li className={styles.bird} onClick={selectBird(bird.id)} key={bird.id}><div className={`${styles.circle} ${styles['red-circle']}`}></div>{bird.name}</li>
            }
          } else {
            return !choosenBirdsIds.includes(idx) ? 
            <li className={styles.bird} onClick={selectBird(bird.id)} key={bird.id}><div className={styles.circle}></div>{bird.name}</li>
            :
            <li className={styles.bird} onClick={selectBird(bird.id)} key={bird.id}><div className={`${styles.circle} ${styles['red-circle']}`}></div>{bird.name}</li>
          }
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  birds: state.game.birds,
  level: state.game.level,
  choosenBirdsIds: state.game.choosenBirdsIds,
  guessed: state.game.guessed,
  randomBirdId: state.game.randomBirdId
}) 

const mapDispatchToProps = (dispatch) => ({
  selectBird: (birdId) => () => dispatch(selectBird(birdId))
})

export const BirdsToMatch = connect(mapStateToProps, mapDispatchToProps)(BirdsToMatchComponent)