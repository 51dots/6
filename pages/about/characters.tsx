import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./story.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />
);

const Characters: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Andromaverse Characters</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/characters/characters.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>Andromaverse Characters</p>
        </p>
      </div>
      <h2>Main Figures</h2>
      <div className={styles.navBoxGrid}>
        {/* Leuko Kuneli */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/characters/leuko`)}
        >
          <h2 className={styles.selectBoxTitle}>Leuko Kuneli</h2>
          <Image
            src="/characters/Leuko0.png"
            alt="Leuko"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Sc0 */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/aout/characters/sc0`)}
        >
          <h2 className={styles.selectBoxTitle}>Sc0</h2>
          <Image src="/gifs/sc0.gif" alt="sc0" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Arnav */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/characters/arnav`)}
        >
          <h2 className={styles.selectBoxTitle}>Arnav</h2>
          <Image
            src="/characters/arnav.png"
            alt="Arnav"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>

      {/* Playtest */}
      <div
        className={styles.navBox}
        role="button"
        onClick={() => router.push(`https://game.ahootdigital.com`)}
      >
        <h2 className={styles.selectBoxTitle}>
          Closed Beta Playtest for Astra Holders
        </h2>
        <Image src="/ami/astra.png" alt="playtest" width={121} height={121} />
        <p className={styles.selectBoxDescription}>Starts In</p>
      </div>
    </div>
  );
};
export default Characters;
