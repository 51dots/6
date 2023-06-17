import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./species.module.css";
import Link from "next/link";


const Artemis: NextPage = () => {
  const router = useRouter();

  return (
<div className={styles.amiContainer}>
  <div className={styles.amiBox}>
    <h2>Artemis - The Whimsical Reptilian Friend of Boundless Wonder</h2>
    <Image src="/ami/artemisf.png" alt="Artemis" width={350} height={350} />
    <h1 className={styles.amiBoxTitle}>Fire Artemis</h1>
    <p className={styles.amiBoxDescription}> 
    Artemis, a spirited and curious reptilian creature with a radiant presence and a tail that gracefully sways. Artemis captures the hearts of all who encounter its essence. 
    From traversing mist-covered mountains to venturing deep into magical forests, Artemis embraces the thrill of discovery and uncovers hidden marvels at every step. 
    Yet, as an ancient darkness looms over the realm, Artemis must unleash its playful spirit and tap into its inner strength to confront the encroaching peril.
    </p></div>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/ami/species" className={styles.mainButton} style={{ textDecoration: "none" }}>
            More Ami</Link></div>

    </div>
  );
};

export default Artemis;
