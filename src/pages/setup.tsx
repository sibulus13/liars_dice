import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useDispatch } from "react-redux";

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
            required
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
      return;
    }
    e.preventDefault();
    dispatch(SET_NAME(inputName.current.value as string));
    await router.push("/game");
  }
}
