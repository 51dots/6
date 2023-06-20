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

const Mnemosyne: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>The Village of Mnemosyne</h2>
      <div className={styles.imageBox}>
        <br></br>
        <LoadImage src="/islands/mnemosyne/mnemosyne.png" />
        <div className={styles.mnemosyneDescriptionContainer}>
          <p className={styles.descriptionText}>
            A realm embodying the essence of memory and remembrance. As you
            traverse through this remarkable land, you will uncover one of the
            last remaining villages, steeped in enigmatic machinery and ancient
            secrets. Within the ethereal atmosphere of Mnemosyne, you will
            encounter the elusive Ghost Ami, spirits of extraordinary power and
            mystery. Delve into the depths of forgotten memories and unlock the
            secrets held within these spectral creatures. Navigate the
            complexities of the villages intricate machines, and let the echoes
            of the past guide you on a journey unlike any other. Mnemosyne
            beckons, ready to reveal its hidden wonders and test your resilience
            in the face of ancient enigmas.
          </p>
        </div>{" "}
      </div>

      <div className={styles.navBoxGrid}>
        {/* Overlord */}
        <div className={styles.mnemosyneBox}>
          <h1 className={styles.selectBoxTitle}>Overlord</h1>
          <Image
            src="/islands/mnemosyne/overlord.png"
            alt="Overlord"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Leader</p>
        </div>

        {/* Specialist */}
        <div className={styles.mnemosyneBox}>
          <h2 className={styles.selectBoxTitle}>Specialist</h2>
          <Image
            src="/islands/mnemosyne/specialist.png"
            alt="stake"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>

        {/* enlightenedmaiden */}
        <div className={styles.mnemosyneBox}>
          <h2 className={styles.selectBoxTitle}>Maiden</h2>
          <Image
            src="/islands/mnemosyne/maiden.png"
            alt="Maiden"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>

        {/* Wanderer */}
        <div className={styles.mnemosyneBox}>
          <h2 className={styles.selectBoxTitle}>Wanderer</h2>
          <Image
            src="/islands/mnemosyne/wanderer.png"
            alt="Wanderer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Citizen</p>
        </div>

        {/* Spy */}
        <div className={styles.mnemosyneBox}>
          <h2 className={styles.selectBoxTitle}>Spy</h2>
          <Image
            src="/islands/mnemosyne/spy.png"
            alt="Spy"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}>Military</p>
        </div>

        {/* Lost Youngling */}
        <div className={styles.mnemosyneBox}>
          <h2 className={styles.selectBoxTitle}>Youth</h2>
          <Image
            src="/islands/mnemosyne/lostyoungling.png"
            alt="Lost Youngling"
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

export default Mnemosyne;
