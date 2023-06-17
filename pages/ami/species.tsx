import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./ami.module.css";
import Link from "next/link";

const Species: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>

<div className={styles.imageBox}>
<h2>Different Ami Species</h2>
<p className={styles.imageBoxDescription}>
      <p className={styles.descriptionText}>
        Ami are adorable creatures that act as faithful companions to you. 
        These charming beings come in a variety of shapes and sizes, each with its own distinct traits and abilities. 
        They can also possess different elemental attributes, which can be altered using special element stones. 
        What makes the Ami even more fascinating is that they originate from various locations and time periods. 
        However, they have all been drawn to the enchanting world of Alysia by an enigmatic cosmic force, creating an intriguing connection among them.
    </p></p></div>
      <div className={styles.navBoxGrid}>

{/* Astra */}
        <div className={styles.Box} 
        role="button"
        onClick={() => router.push(`/ami/species/astra`)}>
          <h2 className={styles.selectBoxTitle}>Astra</h2>
          <Image src="/ami/astra.png" alt="astra" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
 {/* Smoot */}
        <div className={styles.Box} role="button"
          onClick={() => router.push(`/ami/species/smoot`)}>
          <h2 className={styles.selectBoxTitle}>Smoot</h2>
          <Image src="/ami/smoote.png" alt="Smoot" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
  {/* Vixel */}
                <div className={styles.Box} role="button"
          onClick={() => router.push(`/ami/species/vixel`)}>
          <h2 className={styles.selectBoxTitle}>Vixel</h2>
          <Image src="/ami/vixeli.png" alt="Vixel" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
  {/* Artemis */}
          <div className={styles.Box} role="button"
          onClick={() => router.push(`/ami/species/artemis`)}>
          <h2 className={styles.selectBoxTitle}>Artemis</h2>
          <Image src="/ami/artemisf.png" alt="Asrtemis" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>

  {/* Prime */}
             <div className={styles.Box} role="button"
          onClick={() => router.push(`/ami/species/prime`)}>
          <h2 className={styles.selectBoxTitle}>Prime</h2>
          <Image src="/ami/primel.png" alt="Prime" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
          </div>

{/* Bottom Links */}
<div className={styles.navBoxGrid}>
      <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/ami" className={styles.mainButton} style={{ textDecoration: "none" }}>
            Ami Home</Link></div>
      <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/about" className={styles.mainButton} style={{ textDecoration: "none" }}>
            About Game</Link></div>
      </div></div>
  );
};

export default Species;
