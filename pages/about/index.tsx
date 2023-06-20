import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../game/game.module.css";
import Link from "next/link";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />
);

const About: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Andromaverse</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/islands/alysianforest/load.jpg" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Embark on a cosmic adventure in Andromaverse: Escape Alysia.
            Collect, breed, and battle with friendly creatures known as Ami as
            you explore the enchanting Alysian Islands. Uncover the secrets of
            this mystical land while training, evolving, unlocking, farming,
            customizing, trading, and crafting. Restore balance and reclaim the
            lands from the evil void that threatens their existence. Discover
            the hidden potential of each Ami and immerse yourself in a rich
            tapestry of mythology, magic, and mystery. Compete, cooperate, and
            forge connections with fellow players as you build a vibrant
            community within this awe-inspiring universe. The fate of the Ami
            and the destiny of Alysia rest in your hands.
          </p>
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Ami */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/ami/`)}
        >
          <h2 className={styles.selectBoxTitle}>Ami</h2>
          <Image src="/ami/smoothome.png" alt="Ami" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Villagers */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians`)}
        >
          <h2 className={styles.selectBoxTitle}>Alysians</h2>
          <Image src="/main/lad.png" alt="Alysians" width={121} height={121} />
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
          onClick={() => router.push(`alysians/islands`)}
        >
          <h2 className={styles.selectBoxTitle}>Places</h2>
          <Image src="/main/logo.png" alt="Places" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
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
      {/* Bottom Link */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <Link
          href="/game"
          className={styles.mainButton}
          style={{ textDecoration: "none" }}
        >
          To Game
        </Link>
      </div>
    </div>
  );
};
export default About;
