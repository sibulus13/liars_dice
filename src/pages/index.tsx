import Head from "next/head";
import Link from "next/link";
import { buttonStyle, mainStyle, containerStyle } from "~/styles/generic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="Home Page"
          content="Home Page for Sib's implementation of Liar's Dice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainStyle}>
        <div className={containerStyle}>
          <h1 className="text-5xl font-bold text-white">Liars Dice</h1>
          <Link href="/setup" className={buttonStyle}>
            Start Game
          </Link>
          <Link
            className={buttonStyle}
            href="https://en.wikipedia.org/wiki/Liar%27s_dice#Single_hand"
            target="_blank"
          >
            How to Play
          </Link>
        </div>
      </main>

      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
        </div>
      </main> */}
    </>
  );
}
