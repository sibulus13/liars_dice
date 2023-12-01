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
  let { playerNames } = useSelector((state) => state.room);
  let { playerCount } = useSelector((state) => state.room);
  let { playerIndex } = useSelector((state) => state.room);
  let { dices } = useSelector((state) => state.room);
  let { bets } = useSelector((state) => state.room);

  // Generate random player names from a set list

  const actionButtons = [
    { label: "Call BS", action: () => {} },
    { label: "Bet", action: () => {} },
  ];

  // player inputs
  const [dice, setDice] = useState(1);
  const [bet, setBet] = useState(1);
  // Keep track of who's turn it is
  const [turn, setTurn] = useState(0);

  const inputs = [
    {
      label: "Bet",
      type: "range",
      min: 1,
      max: playerCount * 5,
      value: bet,
      onChange: setBet,
    },
    {
      label: "Dice",
      type: "range",
      min: 1,
      max: 6,
      value: dice,
      onChange: setDice,
    },
  ];
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
          {/* <h1 className={headerStyle}>{name}</h1>
          <h1 className={headerStyle}>{playerCount}</h1> */}

          {/* Dice container */}
          <div>
            {dices.map((player, index) => (
              <div key={index}>
                <p className={headerStyle}>{playerNames[index]}</p>
                <div className="my-2 flex gap-2">
                  {player.map((dice, indexDice) => (
                    <p key={indexDice} className={buttonStyle}>
                      {index == playerIndex ? dice : "?"}
                    </p>
                  ))}
                  {/* last bets */}
                  <div className={headerStyle}>
                    {bets[index][0] == 0 ? " " : bets[index][0]}
                  </div>
                  <div className={headerStyle}>
                    {bets[index][1] == 0 ? " " : bets[index][1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Controls container */}
          <div className="p-4">
            {/* inputs */}
            <div className="py-2">
              {inputs.map((input, index) => (
                <div key={index}>
                  <label className={headerStyle}>{input.label}</label>
                  <div className="">
                    <input
                      type={input.type}
                      id={input.label}
                      name={input.label}
                      min={input.min}
                      max={input.max}
                      value={input.value}
                      onChange={(e) => input.onChange(e.target.value)}
                    />
                    {/* display the input number */}
                    <p className={buttonStyle}>{input.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Action button container */}
            <div className="flex justify-center gap-8 py-2">
              {actionButtons.map((button, index) => (
                <button
                  key={index}
                  className={buttonStyle}
                  onClick={button.action}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
