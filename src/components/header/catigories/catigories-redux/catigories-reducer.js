import { combineReducers } from "redux";
import { TO_NEXT_LEVEL, RESET_LEVEL, NEXT_ANSWER, RESET_ANSWER } from "./catigories-types";
import { getRandomBird } from "../../../questions/utils/getRandomBird";

function level(state = 1, action) {
  if(action.type === TO_NEXT_LEVEL) {
    if(state>5){
      return state;
    }
    return state = state + 1;
  } else if(action.type === RESET_LEVEL) {
    return state = 1;
  }

  return state;
}

let levelCounter = 1;

function answer(state = getRandomBird(levelCounter), action) {
  if(action.type === NEXT_ANSWER) {
    if(levelCounter>5){
      return state;
    }
    levelCounter++;
    return state = getRandomBird(levelCounter);
  } else if(action.type === RESET_ANSWER){
    levelCounter = 1;
    return state = getRandomBird(levelCounter);
  }

  return state;
}

export const catigoriesReducer = combineReducers({
    level: level,
    answer: answer
})