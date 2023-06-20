import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./islands/villages.module.css";
import Link from "next/link";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={160} height={90} />
);

const Islands: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Alysian Islands</h2>
      <div className={styles.imageBox}>
        <br></br>
        <LoadImage src="/islands/rhea/rhea.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            The Alysian Villagers are the native inhabitants of the Alysia, each
            residing in their own distinct village. These villagers are deeply
            connected to their respective titans and embody the characteristics
            and culture associated with their elemental affiliation.
          </p>
        </p>
      </div>
      <div className={styles.navBoxGrid}>
        {/* Rhea */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/rhea`)}
        >
          <h1 className={styles.selectBoxTitle}>Rhea</h1>
          <Image
            src="/islands/rhea/greatmother.png"
            alt="Rhea"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Theia */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/theia`)}
        >
          <h2 className={styles.selectBoxTitle}>Theia</h2>
          <Image
            src="/islands/theia/eldersorcerer.png"
            alt="Theia"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Mnemosyne */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/mnemosyne`)}
        >
          <h2 className={styles.selectBoxTitle}>Mnemosyne</h2>
          <Image
            src="/islands/mnemosyne/overlord.png"
            alt="Mnemosyne"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Coeus */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/coeus`)}
        >
          <h2 className={styles.selectBoxTitle}>Coeus</h2>
          <Image
            src="/islands/coeus/sorcerer.png"
            alt="Coeus"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Phoebe */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/phoebe`)}
        >
          <h2 className={styles.selectBoxTitle}>Phoebe</h2>
          <Image
            src="/islands/phoebe/chief.png"
            alt="Phoebe"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Crius */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/crius`)}
        >
          <h2 className={styles.selectBoxTitle}>Crius</h2>
          <Image
            src="/islands/crius/firechief.png"
            alt="Crius"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Hyperion */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/hyperion`)}
        >
          <h2 className={styles.selectBoxTitle}>Hyperion</h2>
          <Image
            src="/islands/hyperion/archon.png"
            alt="Hyperion"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Lethe */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/lethe`)}
        >
          <h2 className={styles.selectBoxTitle}>Lethe</h2>
          <Image
            src="/islands/lethe/yamikuhina.png"
            alt="Yamikuhina"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Dweller */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/alysians/islands/dweller`)}
        >
          <h2 className={styles.selectBoxTitle}>Dweller</h2>
          <Image
            src="/islands/dweller/elderprofessor.png"
            alt="Dweller"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>
      {/* Link */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <Link
          href="/about"
          className={styles.mainButton}
          style={{ textDecoration: "none" }}
        >
          About Game
        </Link>
      </div>
    </div>
  );
};

export default Islands;
