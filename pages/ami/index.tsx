import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../../components/Index.module.css";
import Timer from "../../components/Timer/timer";
import { amiDate } from "../../components/constant";

const Ami: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Top Header Text */}
      <>
        {" "}
        <h2>Ami</h2>
      </>
      <div className={styles.navBoxGrid}>
        {/* Ami Mint Page */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/ami/mint`)}
        >
          <h2 className={styles.selectBoxTitle}>Mint</h2>
          <Image src="/ami/astra.png" alt="artemisf" width={121} height={121} />
          <p className={styles.selectBoxDescription}>Mint for Astra</p>
          <Timer date={amiDate} />
        </div>

        {/* Ami Species */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/ami/species`)}
        >
          <h2 className={styles.selectBoxTitle}>Species</h2>
          <Image src="/ami/smoot.png" alt="species" width={121} height={121} />
          <p className={styles.selectBoxDescription}>Discover the Origins</p>
        </div>

        {/* Ami Type */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/ami/type`)}
        >
          <h2 className={styles.selectBoxTitle}>Type</h2>
          <Image src="/ami/type/fire.png" alt="Type" width={121} height={121} />
          <p className={styles.selectBoxDescription}>Elemental Types</p>
        </div>
      </div>
    </div>
  );
};

export default Ami;
