import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./villages.module.css";
import Link from "next/link";

const Hyperion: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>The Hyperion Region</h2>
      <div className={styles.hyperionDescriptionContainer}>
        <p className={styles.descriptionText}>Hyperion</p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Yami Kuhina */}
        <div className={styles.hyperionBox}>
          <h1 className={styles.selectBoxTitle}>Archon</h1>
          <Image
            src="/islands/hyperion/archon.png"
            alt="Archon"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>
        {/* Kuhina */}
        <div className={styles.hyperionBox}>
          <h1 className={styles.selectBoxTitle}>Kuhina</h1>
          <Image
            src="/islands/hyperion/kuhina.png"
            alt="Kuhina"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Zealot */}
        <div className={styles.hyperionBox}>
          <h2 className={styles.selectBoxTitle}>Zealot</h2>
          <Image
            src="/islands/hyperion/zealot.png"
            alt="Zealot"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Scholar */}
        <div className={styles.hyperionBox}>
          <h2 className={styles.selectBoxTitle}>Scholar</h2>
          <Image
            src="/islands/hyperion/scholar.png"
            alt="Scholar"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Guard */}
        <div className={styles.hyperionBox}>
          <h2 className={styles.selectBoxTitle}>Guard</h2>
          <Image
            src="/islands/hyperion/guard.png"
            alt="Guard"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>
        {/* Farmer */}
        <div className={styles.hyperionBox}>
          <h2 className={styles.selectBoxTitle}>Farmer</h2>
          <Image
            src="/islands/hyperion/farmer.png"
            alt="Farmer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>
        {/* Youth */}
        <div className={styles.hyperionBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/hyperion/Youth.png"
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

export default Hyperion;
