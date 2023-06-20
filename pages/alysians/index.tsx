import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../components/Index.module.css";

const Alysians: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Now */}
      <>
        {" "}
        <h2>Alysians</h2>
      </>
      <div className={styles.navBoxGrid}>
        {/* Mint Alysians */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/mint`)}
        >
          <h1 className={styles.selectBoxTitle}>Mint</h1>
          <Image
            src="/gifs/ladf.gif"
            alt="Lad"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Lore of Villages */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands`)}
        >
          <h2 className={styles.selectBoxTitle}>Islands</h2>
          <Image
            src="/islands/rhea/rheaisle.png"
            alt="villages"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Staking */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/stake`)}
        >
          <h2 className={styles.selectBoxTitle}>Stake</h2>
          <Image
            src="/main/land.png"
            alt="stake"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Loot Page */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/listing/loot`)}
        >
          <h2 className={styles.selectBoxTitle}>Droman Loot</h2>
          <Image
            src="/main/lootc.png"
            alt="loot"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    </div>
  );
};
export default Alysians;
