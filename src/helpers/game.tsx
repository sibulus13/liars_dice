import { SET_PLAYERCOUNT } from "@/redux/reducers/roomSlice";
import { type } from "os";
import { randomNames } from "./setup";

type Dices = number[][];

export function initializeDices(playerCount: number): Dices {
  // initialize playerCount x 5 random numbers ranging from 1-6
  let dices = [];
  dices = Array(playerCount)
    .fill(0)
    .map(() =>
      Array(5)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1),
    );
  return dices;
}

export type playerNames = string[];
export function initializePlayerNames(
  playerCount: number,
  name: string,
  playerIndex: number,
): string[] {
  const playerNames: (string | undefined)[] = Array(playerCount - 1)
    .fill("")
    .map(() => randomNames[Math.floor(Math.random() * randomNames.length)]);
  playerNames.splice(playerIndex, 0, name);
  return playerNames.filter((name): name is string => typeof name === "string");
}
