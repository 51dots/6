import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../../components/Index.module.css";

const Merch: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Go Home */}
      <div className={styles.navBoxGrid}>
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/`)}
        >
          <h1 className={styles.h1}>Soon</h1>
          <Image src="/gifs/ladb.gif" alt="home" width={64} height={64} />
          <p className={styles.selectBoxDescription}></p>Back Home
          <p className={styles.explain}></p>
        </div>
      </div>
    </div>
  );
};

export default Merch;
