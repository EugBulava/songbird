import {SHOW_TEXT, SHOW_BIRD_ONE, SHOW_BIRD_TWO, SHOW_BIRD_THREE, SHOW_BIRD_FOUR, SHOW_BIRD_FIVE, SHOW_BIRD_SIX, END_GAME, START_GAME } from "./answers-types"

export function showBirdOne() {
  return {
      type: SHOW_BIRD_ONE
  }
}

export function showBirdTwo() {
  return {
      type: SHOW_BIRD_TWO
  }
}

export function showBirdThree() {
  return {
      type: SHOW_BIRD_THREE
  }
}

export function showBirdFour() {
  return {
      type: SHOW_BIRD_FOUR
  }
}

export function showBirdFive() {
  return {
      type: SHOW_BIRD_FIVE
  }
}

export function showBirdSix() {
  return {
      type: SHOW_BIRD_SIX
  }
}

export function showText() {
  return {
      type: SHOW_TEXT
  }
}

export function endGame() {
  return {
    type: END_GAME
  }
}

export function startGame() {
  return {
    type: START_GAME
  }
}