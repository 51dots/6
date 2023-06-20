import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villages.module.css";
import Link from "next/link";

const Crius: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Village of Crius</h2>
      <div className={styles.criusDescriptionContainer}>
        <p className={styles.descriptionText}>
          Enter the blazing realm of Crius Village, where the flames of
          adventure ignite in the world of Alysia. Dash through this scorching
          city renowned for its Fire Ami creatures and their fiery powers.
          Journey through the streets of Crius, ablaze with flickering flames,
          as you uncover the secrets of this fiery realm. Engage in thrilling
          battles, harness the power of fire, and unlock the true potential of
          the Fire Ami. Prepare to embark on an epic quest where the Village of
          Crius becomes your fiery sanctuary within the boundless realms of
          Alysia.
        </p>
      </div>

      <div className={styles.navBoxGrid}>
        {/* Leader */}
        <div className={styles.criusBox}>
          <h1 className={styles.selectBoxTitle}>Fire Chief</h1>
          <Image
            src="/islands/crius/firechief.png"
            alt="Fire Chief"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>
        {/* Military */}
        <div className={styles.criusBox}>
          <h2 className={styles.selectBoxTitle}>Soldier</h2>
          <Image
            src="/islands/crius/soldier.png"
            alt="Shaman"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>
        {/* Mech */}
        <div className={styles.criusBox}>
          <h2 className={styles.selectBoxTitle}>Blacksmith</h2>
          <Image
            src="/islands/crius/blacksmith.png"
            alt="Blacksmith"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>
        {/* Spy */}
        <div className={styles.criusBox}>
          <h2 className={styles.selectBoxTitle}>Shaman</h2>
          <Image
            src="/islands/crius/shaman.png"
            alt="Shaman"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>

        {/* Youth */}
        <div className={styles.criusBox}>
          <h2 className={styles.selectBoxTitle}>Young Flame</h2>
          <Image
            src="/islands/crius/youngflame.png"
            alt="Young Flame"
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

export default Crius;
