import type { NextPage } from "next";
import Image from "next/image";
import styles from "./villages.module.css";
import Link from "next/link";

const Coeus: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Village of Coeus</h2>
      <div className={styles.coeusDescriptionContainer}>
        <p className={styles.descriptionText}>
          Explore the realm of Coeus with its captivating Psychic Ami creatures
          in the enchanting world of Alysia. Adventure through the mystical city
          known for its deep connection to the psychic realm. Coeus is a hub of
          extraordinary abilities and psychic powers, where Ami with psychic
          prowess await your discovery. Journey through the streets of Coeus,
          adorned with an aura of mysticism, as you unravel the secrets of the
          psychic realm. Uncover hidden treasures, form powerful alliances, and
          embark on a wondrous adventure where the realms of mind and magic
          converge in Coeus Village, within the limitless wonders of Alysia.
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Sorcerer */}
        <div className={styles.coeusBox}>
          <h1 className={styles.selectBoxTitle}>Sorcerer</h1>
          <Image
            src="/islands/coeus/sorcerer.png"
            alt="Sorcerer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* High Templar */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>High Templar</h2>
          <Image
            src="/islands/coeus/hightemplar.png"
            alt="High Templar"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Monk */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Monk</h2>
          <Image
            src="/islands/coeus/monk.png"
            alt="Monk"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Samurai */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Samurai</h2>
          <Image
            src="/islands/coeus/samurai.png"
            alt="Samurai"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Spy */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Spy</h2>
          <Image
            src="/islands/coeus/spy.png"
            alt="Spy"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Star */}
        <div className={styles.coeusBox}>
          <h2 className={styles.selectBoxTitle}>Star</h2>
          <Image
            src="/islands/coeus/star.png"
            alt="Star"
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

export default Coeus;
