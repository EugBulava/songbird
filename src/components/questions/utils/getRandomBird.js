import { birdsData } from "../../../constants/birds";

export function getRandomBird(level) {
  const min = 0;
  const max = 5;
  const randomBird = min + Math.random() * (max + 1 - min);
  console.log(birdsData[level-1][Math.floor(randomBird)])
  return birdsData[level-1][Math.floor(randomBird)];
}