import { combineReducers } from "redux";
import { PLUSFIVE, PLUSFOUR, PLUSTHREE, PLUSTWO, PLUSONE, RESET_SCORE } from './score-types'
function score(state = 0, action) {
  switch(action.type) {
    case PLUSFIVE : {
      return state = state + 5;
    }
    case PLUSFOUR : {
      return state = state + 4;
    }
    case PLUSTHREE : {
      return state = state + 3;
    }
    case PLUSTWO : {
      return state = state + 2;
    }
    case PLUSONE : {
      return state = state + 1;
    }
    case RESET_SCORE: {
      return state = 0;
    }
    default: {
      return state;
    }
  }
}

export const scoreReducer = combineReducers({
    score: score
})