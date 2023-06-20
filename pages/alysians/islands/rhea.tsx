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
const Rhea: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Village of Rhea</h2>
      <div className={styles.imageBox}>
        <br></br>
        <LoadImage src="/islands/rhea/rhea.png" />
        <div className={styles.rheaDescriptionContainer}>
          <p className={styles.descriptionText}>
            The ancestral village of the Great GAIA, the Mother Goddess of life
            and fertility. Here, you will encounter the Earth Ami for the first
            time, as they call this village their home. Immerse yourself in the
            kind-hearted culture of the Rheans, and uncover the secrets that
            this remarkable village holds. Prepare to embark on a journey that
            intertwines with the essence of nature itself.
          </p>
        </div>
      </div>

      <div className={styles.navBoxGrid}>
        {/* Great Mother */}
        <div className={styles.rheaBox}>
          <h1 className={styles.selectBoxTitle}>Great Mother</h1>
          <Image
            src="/islands/rhea/greatmother.png"
            alt="Great Mother"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>
        {/* Archer */}
        <div className={styles.rheaBox}>
          <h2 className={styles.selectBoxTitle}>Archer</h2>
          <Image
            src="/islands/rhea/archer.png"
            alt="stake"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>

        {/* Maiden */}
        <div className={styles.rheaBox}>
          <h2 className={styles.selectBoxTitle}>Maiden</h2>
          <Image
            src="/islands/rhea/maiden.png"
            alt="maiden"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>
        {/* Wanderer */}
        <div className={styles.rheaBox}>
          <h2 className={styles.selectBoxTitle}>Wanderer</h2>
          <Image
            src="/islands/rhea/wanderer.png"
            alt="wanderer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>
        {/* Farmer */}
        <div className={styles.rheaBox}>
          <h2 className={styles.selectBoxTitle}>Farmer</h2>
          <Image
            src="/islands/rhea/farmer.png"
            alt="farmer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>

        {/* Youth */}
        <div className={styles.rheaBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/rhea/youth.png"
            alt="alyinfo"
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

export default Rhea;
