import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../../components/Index.module.css";

const More: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Top Header Text */}
      <h2>More</h2>
      <div className={styles.navBoxGrid}>
        {/* Delegate */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/more/delegate`)}
        >
          <h2 className={styles.selectBoxTitle}>Delegate</h2>
          <Image src="/stars.png" alt="store" width={88} height={88} />

          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Ship */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() =>
            router.push(
              `https://www.stargaze.zone/marketplace/stars17s7emulfygjuk0xn906athk5e5efsdtumsat5n2nad7mtrg4xres3ysf3p`
            )
          }
        >
          <h2 className={styles.selectBoxTitle}>Ship</h2>
          <Image
            src="/islands/basecamp/shipb.png"
            alt="Ship"
            width={88}
            height={88}
          />

          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Merch */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`more/merch`)}
        >
          <h2 className={styles.selectBoxTitle}>Merch</h2>
          <Image src="/merch.png" alt="merch" width={88} height={88} />

          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Docs */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/more`)}
        >
          <h2 className={styles.selectBoxTitle}>Docs</h2>
          <Image src="/book.png" alt="docs" width={88} height={88} />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>
    </div>
  );
};

export default More;
