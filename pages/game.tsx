import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../components/Index.module.css";

const Game: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBoxGrid}>
        {/* Gameplay */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/game/gameplay`)}
        >
          <h2 className={styles.selectBoxTitle}>Gameplay</h2>
          <Image
            src="/main/alicetv.png"
            alt="gameplay"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Video Gameplay</p>
        </div>

        {/* Playtest */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`https://game.ahootdigital.com`)}
        >
          <h2 className={styles.selectBoxTitle}>Playtest</h2>
          <Image
            src="/gifs/sc0.gif"
            alt="playtest"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Closed Beta Playtests</p>
        </div>
        {/* About the Game */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/about`)}
        >
          <h2 className={styles.selectBoxTitle}>About</h2>
          <Image
            src="/ami/smoothome.png"
            alt="gameplay"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>About Game</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
