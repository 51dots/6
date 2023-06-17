import type { NextPage } from "next";
import Image from "next/legacy/image";
import styles from "./villages.module.css";
import Link from "next/link";

const Phoebe: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Village of Phoebe</h2>
      <div className={styles.phoebeDescriptionContainer}>
        <p className={styles.descriptionText}>
          Discover the hidden village of Phoebe, a magical sanctuary of the
          fairies nestled within the enchanting realm of Alysia. As you traverse
          the mystical lands, a sense of wonder fills the air, beckoning you to
          explore the secrets that lie within. In this ethereal village, you
          will encounter the enchanting Fairy Ami, delicate and ethereal
          creatures that radiate a mesmerizing glow. Let the allure of Phoebe
          guide you in a whimsical atmosphere, where nature and magic
          intertwine, and embark on an enchanting journey that will captivate
          your heart and ignite your imagination.
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Chief */}
        <div className={styles.phoebeBox}>
          <h1 className={styles.selectBoxTitle}>Chief</h1>
          <Image
            src="/islands/phoebe/chief.png"
            alt="chief"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>
        {/* Mage  */}
        <div className={styles.phoebeBox}>
          <h2 className={styles.selectBoxTitle}>Mage</h2>
          <Image
            src="/islands/phoebe/mage.png"
            alt="Mage"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}>Thought</p>
        </div>
        {/* Scientist */}
        <div className={styles.phoebeBox}>
          <h2 className={styles.selectBoxTitle}>Wanderer</h2>
          <Image
            src="/islands/phoebe/wanderer.png"
            alt="Wanderer"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>
        {/* Archer */}
        <div className={styles.phoebeBox}>
          <h2 className={styles.selectBoxTitle}>Archer</h2>
          <Image
            src="/islands/phoebe/archer.png"
            alt="Archer"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>
        {/* Youth */}
        <div className={styles.phoebeBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/phoebe/youth.png"
            alt="Youth"
            width={121}
            height={121}
          />
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

export default Phoebe;
