import { combineReducers } from "redux";
import { PLUSFIVE, PLUSFOUR, PLUSTHREE, PLUSTWO, PLUSONE, RESET_SCORE } from './score-types'
function score(state = 0, action) {
    if(action.type === PLUSFIVE) {
      return state = state + 5;
    } else if(action.type === PLUSFOUR) {
      return state = state + 4;
    } else if(action.type === PLUSTHREE) {
      return state = state + 3;
    } else if(action.type === PLUSTWO) {
      return state = state + 2;
    } else if(action.type === PLUSONE) {
      return state = state + 1;
    } else if(action.type === RESET_SCORE) {
      return state = 0;
    }

    return state;
}

export const scoreReducer = combineReducers({
    score: score
})