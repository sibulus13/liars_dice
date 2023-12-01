import { buttonStyle, mainStyle, containerStyle } from "~/styles/generic";
import Head from "next/head";
import Game from "~/screens/game";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liar{"'"}s Dice</title>
        <meta
          name="Liar's Dice"
          content="Sib's implementation of Liar's Dice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <Game />
      </main>
    </>
  );
}
