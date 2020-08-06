import { DISABLE_BUTTON, ENABLE_BUTTON } from "./nextLevelButton-types"

export function desableButton() {
  return {
      type: DISABLE_BUTTON
  }
}

export function enableButton() {
  return {
      type: ENABLE_BUTTON
  }
}