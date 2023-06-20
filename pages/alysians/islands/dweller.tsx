import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villages.module.css";
import Link from "next/link";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image
    src={src}
    alt="load"
    width={160}
    height={90}
    sizes="100vw"
    style={{
      width: "100%",
      height: "auto"
    }} />
);

const Dweller: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Nomadic Dwellers</h2>
      <LoadImage src="/islands/alysianforest/theiacorridor.png" />
      <div className={styles.coeusDescriptionContainer}>
        <p className={styles.descriptionText}>
          The Nomadic Dwellers are an intrepid group of knowledge seekers,
          constantly on the move in their pursuit of wisdom. Often cast aside
          for their appearance, the travelers cross the land of Alysia and
          beyond. They delve into ancient ruins, decipher forgotten texts, and
          uncover the mysteries that lie hidden in every corner. With an
          insatiable thirst for discovery, the Dwellers adapt to new
          environments, embrace diverse cultures, and share their accumulated
          knowledge with others. Find them on your captivating journey, as they
          help you unravel the secrets of the world and forge connections that
          transcend borders. Enjoy a transformative adventure alongside the
          Nomadic Dwellers, and embark on a quest to broaden your horizons and
          expand your understanding of the world.
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Elder Professor */}
        <div className={styles.coeusBox}>
          <h1 className={styles.selectBoxTitle}>Elder Professor</h1>
          <Image
            src="/islands/dweller/elderprofessor.png"
            alt="Elder Professor"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>
        {/* Scholar  */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Scholar</h2>
          <Image
            src="/islands/dweller/scholar.png"
            alt="Scholar"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Scientist */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Scientist</h2>
          <Image
            src="/islands/dweller/scientist.png"
            alt="Scientist"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Soldier */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Soldier</h2>
          <Image
            src="/islands/dweller/soldier.png"
            alt="Soldier"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>
        {/* Youth */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/dweller/youth.png"
            alt="Youth"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Youth</p>
        </div>
      </div>
      {/* Link */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <Link
          href="/alysians/islands/"
          className={styles.mainButton}
          style={{ textDecoration: "none" }}
        >
          More Islands
        </Link>
      </div>
    </div>
  );
};

export default Dweller;
