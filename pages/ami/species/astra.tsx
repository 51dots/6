import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./species.module.css";
import Link from "next/link";


const Astra: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.amiContainer}>
      <div className={styles.amiBox}>
        <h2>Astra - The Radiant Star of Destiny</h2>
        <Image
          src="/ami/astra.png"
          alt="Astra"
          width={350}
          height={350}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <h1 className={styles.amiBoxTitle}>Magic Astra</h1>
        <p className={styles.amiBoxDescription}> 
            In the wake of a cosmic tempest, Astra emerged in a realm unknown, casting its radiant glow upon a new world. 
            As its cosmic presence graced Alysia, the very fabric of destiny began to shift. 
            The fate of Alysia awaits your discovery as you harness the celestial essence of Astra.
            </p></div>
            <div style={{ marginTop: 32, marginBottom: 32 }}>
              <Link href="/ami/species" className={styles.mainButton} style={{ textDecoration: "none" }}>
                More Ami</Link></div>

        </div>
  );
};

export default Astra;
