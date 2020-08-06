import { combineReducers } from 'redux';
import { scoreReducer } from '../components/header/score/score-redux/score-reducer'
import { catigoriesReducer } from '../components/header/catigories/catigories-redux/catigories-reducer'
import { nextLevelButtonReducer } from '../components/nextLevelButton/nextLevelButton-redux/nextLevelButton-reducer'
import { answersReducer } from '../components/answers/answers-redux/answers-reducer'

export const rootReducer = combineReducers({
  scoreReducer,
  catigoriesReducer,
  nextLevelButtonReducer,
  answersReducer
});
