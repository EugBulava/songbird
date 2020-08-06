const { PLUSFIVE, PLUSFOUR, PLUSTHREE, PLUSTWO, PLUSONE, RESET_SCORE } = require("./score-types");

export function scorePlusOne() {
  return {
      type: PLUSONE
  }
}

export function scorePlusTwo() {
  return {
      type: PLUSTWO
  }
}

export function scorePlusThree() {
  return {
      type: PLUSTHREE
  }
}

export function scorePlusFour() {
  return {
      type: PLUSFOUR
  }
}

export function scorePlusFive() {
  return {
      type: PLUSFIVE
  }
}

export function resetScore() {
  return {
      type: RESET_SCORE
  }
}