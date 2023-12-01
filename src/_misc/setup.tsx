import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  SET_PLAYERCOUNT,
  SET_PLAYERNAME,
  SET_PLAYERNAMES,
  SET_DICES,
  SET_PLAYERINDEX,
  SET_BETS,
} from "@/redux/reducers/roomSlice";
import { initializeDices, initializePlayerNames, initializeBets } from "~/helpers/initializeRoom";
import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";
import RadioButtons from "~/components/generic/RadioButtons";
import { randomNames, twoToEight } from "~/helpers/setup";

export default function Home() {
  const { playerCount } = useSelector((state) => state.room);

  const dispatch = useDispatch();
  const inputName = useRef(null);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Setup</title>
        <meta name="Setup" content="Setup for a game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <form className={containerStyle}>
          <p className={headerStyle}>Your name:</p>
          <input
            className=""
            type="text"
            ref={inputName}
            // required
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your name")
            }
          />
          <p className={headerStyle}>How many players?</p>
          <RadioButtons
            initial={"2"}
            options={twoToEight}
            onSelect={(value) => dispatch(SET_PLAYERCOUNT(value))}
          />
          <button
            className={buttonStyle}
            type="submit"
            onClick={async (e) => await handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );

  async function handleSubmit(e) {
    // if name is empty, don't submit and warn user
    if (!inputName.current?.value || inputName.current?.value === "") {
      // return;
    }
    e.preventDefault();
    // randomly generate playerIndex as a number between 0 and playerCount - 1
    const playerIndex: number = Math.floor(Math.random() * playerCount);
    // randomly generate player names (array of length playerCount-1 filled with names) and add the user name to the playerIndex
    const playerNames = initializePlayerNames(
      playerCount as number,
      inputName.current.value as string,
      playerIndex,
    );
    const dices = initializeDices(playerCount as number, 5);

    dispatch(SET_PLAYERINDEX(playerIndex));
    dispatch(SET_PLAYERNAME(inputName.current.value as string));
    dispatch(SET_PLAYERNAMES(playerNames));
    dispatch(SET_DICES(dices));
    dispatch(SET_BETS(initializeBets(playerCount)));
    await router.push("/game");
  }
}
