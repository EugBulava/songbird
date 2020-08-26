import { combineReducers } from "redux";
import { SHOW_TEXT, SHOW_BIRD_ONE, SHOW_BIRD_TWO, SHOW_BIRD_THREE, SHOW_BIRD_FOUR, SHOW_BIRD_FIVE, SHOW_BIRD_SIX, END_GAME, START_GAME } from "./answers-types";

function aboutBird(state = 'text', action) {
  switch(action.type) {
    case SHOW_TEXT: {
      return state = 'text';
    }
    case SHOW_BIRD_ONE: {
      return state = 'bird-1';
    }
    case SHOW_BIRD_TWO: {
      return state = 'bird-2';
    }
    case SHOW_BIRD_THREE: {
      return state = 'bird-3';
    }
    case SHOW_BIRD_FOUR: {
      return state = 'bird-4';
    }
    case SHOW_BIRD_FIVE: {
      return state = 'bird-5';
    }
    case SHOW_BIRD_SIX: {
      return state = 'bird-6';
    }
    default: {
      return state;
    }
  }
}

function endGame(state = false, action) {
  switch(action.type) {
    case END_GAME: {
      return state = 'true';
    }
    case START_GAME: {
      return state = 'false';
    }
    default: {
      return state;
    }
  }
}

export const answersReducer = combineReducers({
  aboutBird: aboutBird,
  endGame: endGame
})