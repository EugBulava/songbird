import { createAction } from "redux-actions";

export const selectBird = createAction("select_bird");
export const toNextLevel = createAction("to_next_level");
export const restartGame = createAction("restart_game");