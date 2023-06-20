import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./species.module.css";
import Link from "next/link";


const Vixel: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.amiContainer}>
      <div className={styles.amiBox}>
        <h2>Vixel</h2>
        <Image
          src="/ami/vixeli.png"
          alt="Vixel"
          width={350}
          height={350}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <h1 className={styles.amiBoxTitle}>Ice Vixel</h1>
        <p className={styles.amiBoxDescription}></p></div>

        <div style={{ marginTop: 32, marginBottom: 32 }}>
              <Link href="/ami/species" className={styles.mainButton} style={{ textDecoration: "none" }}>
                More Ami</Link></div>
    </div>
  );
};

export default Vixel;
