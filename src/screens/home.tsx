import Link from "next/link";
import { buttonStyle, mainStyle, containerStyle } from "~/styles/generic";

export default function home() {
  return (
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
  );
}
