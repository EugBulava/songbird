import { combineReducers } from "redux";
import { SHOW_TEXT, SHOW_BIRD_ONE, SHOW_BIRD_TWO, SHOW_BIRD_THREE, SHOW_BIRD_FOUR, SHOW_BIRD_FIVE, SHOW_BIRD_SIX, END_GAME, START_GAME } from "./answers-types";

function aboutBird(state = 'text', action) {
  if(action.type === SHOW_BIRD_ONE) {
    
    return state = 'bird-1';
  } else if(action.type === SHOW_BIRD_TWO){

    return state = 'bird-2';
  } else if(action.type === SHOW_BIRD_THREE){

    return state = 'bird-3';
  } else if(action.type === SHOW_BIRD_FOUR){

    return state = 'bird-4';
  } else if(action.type === SHOW_BIRD_FIVE){

    return state = 'bird-5';
  } else if(action.type === SHOW_BIRD_SIX){

    return state = 'bird-6';
  } else if(action.type === SHOW_TEXT) {

    return state = 'text';
  }

  return state;
}

function endGame(state = false, action) {
  if(action.type === END_GAME) {
    return state = 'true';
  } else if(action.type === START_GAME) {
    return state = 'false';
  }

  return state;
}

export const answersReducer = combineReducers({
  aboutBird: aboutBird,
  endGame: endGame
})