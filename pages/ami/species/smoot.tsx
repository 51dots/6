import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./species.module.css";
import Link from "next/link";


const Smoot: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.amiContainer}>
      <div className={styles.amiBox}>
        <h2>Smoot - The Resilient Rabbit with a Big Heart.</h2>
        <Image
          src="/ami/smoothome.png"
          alt="Smoot"
          width={350}
          height={350}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <h1 className={styles.amiBoxTitle}></h1>
        <p className={styles.amiBoxDescription}> 
        The adorable and curious rabbit-like creature, full of charm. 
        Life for Smoot was once a joyful experience under the shelter of his great tree on his home planet, relishing in the beauty of nature and collecting berries. 
        However, everything changed when a devastating cosmic storm destroyed his beloved tree, leaving Smoot without a place to call home. 
        Guided by an irresistible force, he follows a mysterious hole in the ground that transports him to the strange and captivating Alysia. 
        </p></div>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
              <Link href="/ami/species" className={styles.mainButton} style={{ textDecoration: "none" }}>
                More Ami</Link></div>

        </div>
  );
};

export default Smoot;
