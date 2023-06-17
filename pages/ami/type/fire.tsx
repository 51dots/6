import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./type.module.css";
import Link from "next/link";


const Fire: NextPage = () => {
  const router = useRouter();

  return (
<div className={styles.navContainer}>


  <div className={styles.redBox}>
    <h2>Fire</h2>
    <Image src="/ami/type/fire.png" alt="Fire" width={350} height={350} />
    <div style={{ marginTop: 32, marginBottom: 32 }}>
          
          <Link href="/ami/type" className={styles.mainButton} style={{ textDecoration: "none" }}>
            More Ami</Link></div>
    
    </div>
    </div>
  );
};

export default Fire;