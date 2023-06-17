import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./type.module.css";
import Link from "next/link";


const Water: NextPage = () => {
  const router = useRouter();

  return (
<div className={styles.navContainer}>


  <div className={styles.blueBox}>
    <h2>Water</h2>
    <Image src="/ami/type/water.png" alt="Water" width={350} height={350} />
    <div style={{ marginTop: 32, marginBottom: 32 }}>
          
          <Link href="/ami/type" className={styles.mainButton} style={{ textDecoration: "none" }}>
            More Ami</Link></div>
    
    </div>
    </div>
  );
};

export default Water;
