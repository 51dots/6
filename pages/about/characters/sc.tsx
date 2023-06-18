import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../story.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={100} height={200} />
);

const Sc: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Director Sc0</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/islands/theia/theia.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Meet Sc0, a pivotal character throughout the game who assumes the
            role of Director of the trainers. With their strong-willed nature,
            sense of responsibility, and strategic mindset, Sc0 brings a new
            level of authority and direction to the storyline. As a decisive
            leader, they coordinate and oversee the trainers&apos; activities,
            ensuring they are well-prepared and equipped for the challenges
            ahead. Sc0&apos;s presence adds depth to the narrative, challenging
            both trainers and players to rise to the occasion and emphasizing
            the importance of teamwork. Experience the impact of Sc0&apos;s
            character as they push the boundaries of the gameplay experience,
            driving the storyline forward with their decisions and actions. Get
            ready for an immersive journey where Sc0&apos;s strong-willed
            demeanor and decisive nature shape the cosmic adventure that awaits.
          </p>
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Sc0 */}
        <div className={styles.Box}>
          <h2 className={styles.selectBoxTitle}>Sc0</h2>
          <Image src="/gifs/sc0.gif" alt="Sco" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>

      {/* More Playtest */}
      <div
        className={styles.navBox}
        role="button"
        onClick={() => router.push(`/about/playtest`)}
      >
        <h2 className={styles.selectBoxTitle}>More Debrief</h2>
        <Image src="/main/alice.png" alt="Characters" width={66} height={66} />
        <p className={styles.selectBoxDescription}></p>
      </div>
    </div>
  );
};

export default Sc;
