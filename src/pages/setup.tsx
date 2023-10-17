import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SET_NAME } from "@/redux/reducers/profileSlice";
import { SET_PLAYERCOUNT } from "@/redux/reducers/roomSlice";
import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";
import RadioButtons from "~/components/generic/RadioButtons";

export default function Home() {
  const dispatch = useDispatch();
  const inputName = useRef(null);
  const twoToEight = [
    {
      value: "2",
      label: "2",
      disabled: false,
    },
    {
      value: "3",
      label: "3",
      disabled: false,
    },
    {
      value: "4",
      label: "4",
      disabled: false,
    },
    {
      value: "5",
      label: "5",
      disabled: false,
    },
    {
      value: "6",
      label: "6",
      disabled: true,
    },
    {
      value: "7",
      label: "7",
      disabled: true,
    },
    {
      value: "8",
      label: "8",
      disabled: true,
    },
  ];
  const Router = useRouter();
  const { name } = useSelector((state) => state.profile);
  const { playerCount } = useSelector((state) => state.room);
  return (
    <>
      <Head>
        <title>Setup</title>
        <meta name="Setup" content="Setup for a game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <div className={containerStyle}>
          <p className={headerStyle}>Your name:</p>
          <input className="" type="text" ref={inputName} />
          <p className={headerStyle}>How many players?</p>
          <RadioButtons
            options={twoToEight}
            onSelect={(value) => dispatch(SET_PLAYERCOUNT(value))}
          />
          <button
            className={buttonStyle}
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
          {/* For Verification */}
          {/* <h1 className={headerStyle}>{name}</h1>
          <h1 className={headerStyle}>{playerCount}</h1> */}
        </div>
      </main>
    </>
  );

  function handleSubmit() {
    console.log("submitting");
    // if name is empty, don't submit and warn user
    if (!inputName.current.value || inputName.current.value === "") {
      alert("Please enter a name");
      return;
    }
    dispatch(SET_NAME(inputName.current.value as string));
    Router.push("/game");
  }
}
