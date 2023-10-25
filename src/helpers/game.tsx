import { randomNames } from "./setup";

type Dices = number[][];

export function initializeDices(playerCount, numberOfRandomNumbers): Dices {
  // Use Array.from to create an array of playerCount rows
  const dices = Array.from({ length: playerCount }, () => Array.from({length: numberOfRandomNumbers}, () => Math.floor(Math.random() * 6), // Generates random numbers between 0 and 99
    ),
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
