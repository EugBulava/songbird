import { combineReducers } from "redux";
import { DISABLE_BUTTON, ENABLE_BUTTON } from "./nextLevelButton-types";

function nextLevelButton(state = 'disabled', action) {
  if(action.type === DISABLE_BUTTON) {
    
    return state = 'disabled';
  } else if(action.type === ENABLE_BUTTON) {

    return state = 'enabled';
  }

  return state;
}

export const nextLevelButtonReducer = combineReducers({
  nextLevelButton: nextLevelButton
})