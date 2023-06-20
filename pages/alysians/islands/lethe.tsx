import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villages.module.css";
import Link from "next/link";

const Lethe: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Lethe Barier</h2>
      <div className={styles.letheDescriptionContainer}>
        <p className={styles.descriptionText}>The lost and Misguided.</p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Yami Kuhina */}
        <div className={styles.letheBox}>
          <h1 className={styles.selectBoxTitle}>Yami Kuhina</h1>
          <Image
            src="/islands/lethe/yamikuhina.png"
            alt="Yami Kuhina"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Necromancer */}
        <div className={styles.letheBox}>
          <h2 className={styles.selectBoxTitle}>Necromancer</h2>
          <Image
            src="/islands/lethe/necromancer.png"
            alt="Necromancer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Scavenger */}
        <div className={styles.letheBox}>
          <h2 className={styles.selectBoxTitle}>Scavenger</h2>
          <Image
            src="/islands/lethe/scavenger.png"
            alt="Scavenger"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Witch */}
        <div className={styles.letheBox}>
          <h2 className={styles.selectBoxTitle}>Witch</h2>
          <Image
            src="/islands/lethe/witch.png"
            alt="Witch"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Youth */}
        <div className={styles.letheBox}>
          <h2 className={styles.selectBoxTitle}>Collector</h2>
          <Image
            src="/islands/lethe/collector.png"
            alt="Collector"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
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

export default Lethe;
