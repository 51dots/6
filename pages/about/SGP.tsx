import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./story.module.css";
import Timer from "../../components/Timer/timer";
import { sgpDate } from "../../components/constant";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />
);

const SGP: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Andromaverse SGP Playtest</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/main/basecamp.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Become the legendary hero Rhea needs! Gear up at Base Camp with your
            chosen trainer director punk avatar and select a companion to aid
            you in battle. Prepare to be a fearless explorer as you brave the
            challenges of the perilous Alysian Forest, progressing further on
            your quest. Finally, reach the nature-filled village of Rhea, where
            the looming darkness of the Lyssa Guardian awaits. With your trusted
            Ami companion, embark on a solo mission to save Rhea from impending
            doom. Be immerearsed in a world where natureo&apos;s essence
            intertwines with your destiny, shaping your own heroic tale through
            the power of choice. Join us as a playtester and embrace this
            extraordinary adventure, testing your skills, courage, and strategic
            thinking. The fate of Rhea rests in your hands!
          </p>
        </p>
      </div>
      <h2>Journey Debrief Material</h2>
      <div className={styles.navBoxGrid}>
        {/* History */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/history`)}
        >
          <h2 className={styles.selectBoxTitle}>History</h2>
          <Image
            src="/main/badgea.png"
            alt="History"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Hume */}
        <div
          className={styles.Box}
          role="button"
          onClick={() =>
            window.open(
              "https://www.stargaze.zone/marketplace/stars17s7emulfygjuk0xn906athk5e5efsdtumsat5n2nad7mtrg4xres3ysf3p"
            )
          }
        >
          <h2 className={styles.selectBoxTitle}>Hume</h2>
          <Image src="/gifs/sc0.gif" alt="Hume" width={121} height={121} />
        </div>
        {/* Places */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians/islands`)}
        >
          <h2 className={styles.selectBoxTitle}>Places</h2>
          <Image src="/main/logo.png" alt="Places" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Ami */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/ami/species`)}
        >
          <h2 className={styles.selectBoxTitle}>Ami</h2>
          <Image src="/ami/smoothome.png" alt="Ami" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Enfer */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/game/enfer`)}
        >
          <h2 className={styles.selectBoxTitle}>Enfer</h2>
          <Image src="/enfer/guard.png" alt="Enfer" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>
      {/* Discord Link */}
      <p>Visit the Discord for access keys</p>
      <a
        href={`https://discord.gg/etfuaFsQKy`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <Image
          src="/main/discord.png"
          className={styles.profileImage}
          width={33}
          height={33}
          alt="Discord"
        />
      </a>

      {/* Playtest */}
      <div
        className={styles.navBox}
        role="button"
        onClick={() => router.push(`https://game.ahootdigital.com`)}
      >
        <h2 className={styles.selectBoxTitle}>Closed Beta SGP Playtest</h2>
        <Image
          src="/islands/basecamp/ship.png"
          alt="playtest"
          width={121}
          height={121}
        />
        <p className={styles.selectBoxDescription}> Starts In</p>
        <Timer date={sgpDate} />
      </div>
    </div>
  );
};
export default SGP;
