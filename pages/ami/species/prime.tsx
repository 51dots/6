import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./species.module.css";
import Link from "next/link";


const Prime: NextPage = () => {
  const router = useRouter();

  return (
<div className={styles.amiContainer}>
  <div className={styles.amiBox}>
    <h2>Prime</h2>
    <Image src="/ami/prime.png" alt="Prime" width={350} height={350} />
    <h1 className={styles.amiBoxTitle}>Light Prime</h1>
    <p className={styles.amiBoxDescription}> 
 </p></div>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/ami/species" className={styles.mainButton} style={{ textDecoration: "none" }}>
            More Ami</Link></div>
    </div>
  );
};

export default Prime;
