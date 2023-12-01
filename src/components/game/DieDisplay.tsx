"use client";

import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";

export default function DieDisplay({ dices, playerNames, playerIndex, bets }) {
  return (
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
  );
}
