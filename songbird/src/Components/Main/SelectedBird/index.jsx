import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

const SelectedBirdComponent = ({ bird }) => {

  return (
    <div className={styles['bird-container']}>
      {(() => {
        if(bird) {
          return <Bird info={bird}/>
        } else {
          return (
            <div>
              <p className={styles.text}>Прослушайте плеер</p>
              <p className={styles.text}>Выберете птицу из списка</p>
            </div>
          )
        }
      })()}  
    </div>
  )
    
}

const Bird = (props) => {

  return (
    <>
      <div className={styles['current-bird-container']}>
        <img className={styles['bird-image']} src={props.info.image} alt=""/>
        <div className={styles['info-container']}>
          <span className={styles['bird-name']}>{props.info.name}</span>
          <span className={styles['bird-species']}>{props.info.species}</span>
          <audio className={styles['bird-audio']} src={props.info.audio} controls></audio>
        </div>
      </div>
      <p className={styles['bird-description']}>{props.info.description}</p>
    </>
  )
}

const mapStateToProps = (state) => ({
    bird: state.game.birds[state.game.level][state.game.selectedBirdId]
  })

export const SelectedBird = connect(mapStateToProps, null)(SelectedBirdComponent)