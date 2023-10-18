import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";

// TODO: implement game logic
// TODO: make this a 1 pg app so refresh doesn't just reset state
export default function Game() {
  const { name } = useSelector((state) => state.profile);
  const { playerCount } = useSelector((state) => state.room);

  // randomly generate playerIndex as a number between 0 and playerCount - 1
  const playerIndex = Math.floor(Math.random() * playerCount);
  // Generate random player names from a set list
  const randomNames = [
    "John",
    "Jane",
    "Joe",
    "Jill",
    "Jack",
    "Jenny",
    "Jim",
    "Jen",
  ];

  // randomly generate player names (array of length playerCount-1 filled with names) and add the user name to the end
  const playerNames = Array(playerCount)
    .fill('')
    .map(() => randomNames[Math.floor(Math.random() * randomNames.length)])
    .splice(playerIndex, name);

  // randomly generate dice values for all players (array of length playerCount filled with 5x 1-6)
  let diceValues = [];
  diceValues = Array(playerCount)
    .fill(0)
    .map(() =>
      Array(5)
        .fill(0)
        .map(() => Math.floor(Math.random() * 6) + 1),
    );
  // Keep track of last round of bets
  const [bets, setBets] = useState(Array(playerCount).fill([0, 0]));
  // Keep track of who's turn it is
  const [turn, setTurn] = useState(0);
  // Keep track of who's turn it is to call BS

  console.log(playerNames, playerIndex, diceValues);
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="Game" content="Game " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <div className={containerStyle}>
          {/* For Verification */}
          <h1 className={headerStyle}>{name}</h1>
          <h1 className={headerStyle}>{playerCount}</h1>
        </div>
        {/* Dice container */}
        <div>
          {/* Show dices based on diceValues */}
          {playerNames}
          {diceValues.map((player, index) => (
            <div key={index}>
              <p className={headerStyle}>{playerNames[index]}</p>
            </div>
          ))}
        </div>
        {/* Controls container */}
        <div></div>
      </main>
    </>
  );
}
