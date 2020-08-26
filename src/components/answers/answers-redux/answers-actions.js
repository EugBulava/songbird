import {SHOW_TEXT, SHOW_BIRD_ONE, SHOW_BIRD_TWO, SHOW_BIRD_THREE, SHOW_BIRD_FOUR, SHOW_BIRD_FIVE, SHOW_BIRD_SIX, END_GAME, START_GAME } from "./answers-types"

export const showBirdOne = () => ({ type: SHOW_BIRD_ONE });
export const showBirdTwo = () => ({ type: SHOW_BIRD_TWO });
export const showBirdThree = () => ({ type: SHOW_BIRD_THREE });
export const showBirdFour = () => ({ type: SHOW_BIRD_FOUR });
export const showBirdFive = () => ({ type: SHOW_BIRD_FIVE });
export const showBirdSix = () => ({ type: SHOW_BIRD_SIX });
export const showText = () => ({ type: SHOW_TEXT });
export const endGame = () => ({ type: END_GAME });
export const startGame = () => ({ type: START_GAME });