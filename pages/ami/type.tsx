import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./type/type.module.css";
import Link from "next/link";


const Type: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>

<h2>Element Types</h2>
<div className={styles.imageBox}>
<p className={styles.imageBoxDescription}>
      <p className={styles.descriptionText}>
        Ami can come or be be evlovled into many different types, 
        with some capable of being able to hold two types at once.</p></p></div>


      <div className={styles.navBoxGrid}>
{/* Earth */}
        <div className={styles.greenTypeBox} role="button" onClick={() => router.push(`/ami/type/earth`)}>
      <h2 className={styles.selectBoxTitle}>Earth</h2>
          <Image src="/ami/type/earth.png" alt="Earth" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
 {/* Fire */}
        <div className={styles.redTypeBox} role="button"
          onClick={() => router.push(`/ami/type/fire`)}>
          <h2 className={styles.selectBoxTitle}>Fire</h2>
          <Image src="/ami/type/fire.png" alt="Smoot" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
  {/* Div */}
</div><div className={styles.navBoxGrid}>
  {/* Electric */}
                <div className={styles.yellowTypeBox} role="button"
          onClick={() => router.push(`/ami/type/electric`)}>
          <h2 className={styles.selectBoxTitle}>Electric</h2>
          <Image src="/ami/type/electric.png" alt="Vixel" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
  {/* Water */}
          <div className={styles.blueTypeBox} role="button"
          onClick={() => router.push(`/ami/type/water`)}>
          <h2 className={styles.selectBoxTitle}>Water</h2>
          <Image src="/ami/type/water.png" alt="Asrtemis" width={121} height={121} />
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
      </div>
      </div>

  );
};

export default Type;
