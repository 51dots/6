import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../components/Index.module.css";

const Collectibles: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Top Header Text */}
      <>
        {" "}
        <h2>Minting</h2>
      </>
      <div className={styles.navBoxGrid}>
        {/* Ami Page */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/ami/`)}
        >
          <h2 className={styles.selectBoxTitle}>Ami</h2>
          <Image src="/ami/astra.png" alt="artemisf" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Alysians */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/`)}
        >
          <h1 className={styles.selectBoxTitle}>Alysians</h1>
          <Image src="/gifs/ladf.gif" alt="ladf" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Ship */}
        <div className={styles.navBoxGrid}>
          <div
            className={styles.navBox}
            role="button"
            onClick={() =>
              router.push(
                `https://www.stargaze.zone/marketplace/stars17s7emulfygjuk0xn906athk5e5efsdtumsat5n2nad7mtrg4xres3ysf3p`
              )
            }
          >
            <h2 className={styles.selectBoxTitle}>SGP</h2>
            <Image
              src="/islands/basecamp/ship.png"
              alt="Ship"
              width={88}
              height={88}
            />
          </div>
          {/* Loot Page */}
          <div
            className={styles.navBox}
            role="button"
            onClick={() => router.push(`/listing/loot`)}
          >
            <h2 className={styles.selectBoxTitle}>Droman Loot</h2>
            <Image src="/main/lootc.png" alt="loot" width={121} height={121} />
          </div>
          {/* Merch */}
          <div className={styles.navBoxGrid}></div>
          <div
            className={styles.navBox}
            role="button"
            onClick={() => router.push(`/collectibles`)}
          >
            <h2 className={styles.selectBoxTitle}>Merch</h2>
            <Image src="/gifs/zed.gif" alt="merch" width={88} height={88} />
            <p className={styles.selectBoxDescription}>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collectibles;
