import type { NextPage } from "next";
import { useRouter } from "next/router";
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

const Theia: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>The Village of Theia</h2>
      <div className={styles.imageBox}>
        <br></br>
        <LoadImage src="/islands/theia/theia.png" />
        <div className={styles.theiaDescriptionContainer}>
          <p className={styles.descriptionText}>
            Discover Theia Village, a realm of sight and brilliance in the
            enchanting world of Alysia. Immerse yourself in the vibrant city
            known for its wizards and magical prowess. This hub of mystic arts
            is home to the captivating electric Ami creatures, who wield the
            power of electricity with unique abilities. Embark on an immersive
            journey through Theias streets adorned with glowing lights, where
            wizards unravel the universes mysteries. Uncover hidden treasures,
            forge alliances, and embrace the limitless possibilities that await
            in Theia Village, where brilliance and the wonders of the Alysia
            converge.
          </p>
        </div>{" "}
      </div>
      <div className={styles.navBoxGrid}>
        {/* Elder Sorcerer  */}
        <div className={styles.theiaBox}>
          <h1 className={styles.selectBoxTitle}>Elder Sorcerer</h1>
          <Image
            src="/islands/theia/eldersorcerer.png"
            alt="Elder Sorcerer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Mage */}
        <div className={styles.theiaBox}>
          <h2 className={styles.selectBoxTitle}>Mage</h2>
          <Image
            src="/islands/theia/mage.png"
            alt="Mage"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Warlock */}
        <div className={styles.theiaBox}>
          <h2 className={styles.selectBoxTitle}>Warlock</h2>
          <Image
            src="/islands/theia/warlock.png"
            alt="Warlock"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Wizard */}
        <div className={styles.theiaBox}>
          <h2 className={styles.selectBoxTitle}>Wizard</h2>
          <Image
            src="/islands/theia/wizard.png"
            alt="Wizard"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Apprentice */}
        <div className={styles.theiaBox}>
          <h2 className={styles.selectBoxTitle}>Apprentice</h2>
          <Image
            src="/islands/theia/apprentice.png"
            alt="Apprentice"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Youth */}
        <div className={styles.theiaBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/theia/youngwizard.png"
            alt="alyinfo"
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

export default Theia;
