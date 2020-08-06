import { TO_NEXT_LEVEL, RESET_LEVEL, NEXT_ANSWER, RESET_ANSWER } from "./catigories-types"

export function toNextLevel() {
  return {
      type: TO_NEXT_LEVEL
  }
}

export function resetLevel() {
  return {
      type: RESET_LEVEL
  }
}

export function nextAnswer() {
  return {
      type: NEXT_ANSWER
  }
}

export function reserAnswer() {
  return {
      type: RESET_ANSWER
  }
}



