import { randomNames } from "./setup";
import {
  SET_PLAYERCOUNT,
  SET_PLAYERNAME,
  SET_PLAYERNAMES,
  SET_DICES,
  SET_PLAYERINDEX,
  SET_BETS,
} from "@/redux/reducers/roomSlice";

type Dices = number[][];

export function initializeDices(playerCount, numberOfRandomNumbers): Dices {
  // Use Array.from to create an array of playerCount rows
  const dices = Array.from({ length: playerCount }, () =>
    Array.from({ length: numberOfRandomNumbers }, () =>
      Math.floor(Math.random() * 6),
    ),
  );

  return dices;
}

export function initializeBets(playerCount): Dices {
  // Use Array.from to create an array of playerCount rows
  const dices = Array.from({ length: playerCount }, () =>
    Array.from({ length: 2 }, () => 0),
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

export function initializeGameRoom(
  playerCount = 4,
  name = "Sib",
  playerIndex = 0,
) {
  const playerNames = initializePlayerNames(playerCount, name, playerIndex);
  const dices = initializeDices(playerCount, 5);
  const bets = initializeBets(playerCount);
  return { playerNames, dices, bets };
}
