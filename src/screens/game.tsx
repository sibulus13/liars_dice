"use client";

import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import Controller from "~/components/game/Controller";
import DieDisplay from "~/components/game/DieDisplay";
import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";

import { initializeGameRoom } from "~/helpers/initializeRoom";

const playerCount = 4;
const playerIndex = 0;
const playerName = "Sib";

export default function Game() {
  // player inputs
  const [playerNames, setPlayerNames] = useState(["Sib", "Sib", "Sib", "Sib"]);
  const [dices, setDices] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]);
  const [bets, setBets] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [dice, setDice] = useState(1);
  const [bet, setBet] = useState(1);
  const [turn, setTurn] = useState(0);

  // initialize game room
  useEffect(() => {
    const { playerNames, dices, bets } = initializeGameRoom(
      playerCount,
      playerName,
      playerIndex,
    );
    const name = playerNames[playerIndex];
    setPlayerNames(playerNames);
    setDices(dices);
    setBets(bets);
  }, []);

  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="Game" content="Game " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <div className={containerStyle}>
          <h1 className={headerStyle}>{turn}</h1>
          <DieDisplay
            dices={dices}
            playerNames={playerNames}
            playerIndex={playerIndex}
            bets={bets}
          />
          <Controller
            playerCount={playerCount}
            bet={bet}
            setBet={setBet}
            dice={dice}
            setDice={setDice}
          />
        </div>
      </main>
    </>
  );
}
