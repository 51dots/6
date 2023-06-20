import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../story.module.css";
import React from "react";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={300} height={300} />
);

const Charon: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Charon Stone</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/main/charon.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            A rare stone that should never be squandered. With this remarkable
            artifact in your possession, you hold the key to restoring balance
            and hope to the afflicted Ami.
          </p>
        </p>
      </div>
      <div className={styles.navBoxGrid}></div>

      {/* More Playtest */}
      <div
        className={styles.navBox}
        role="button"
        onClick={() => router.push(`/about/playtest`)}
      >
        <h2 className={styles.selectBoxTitle}>More Debrief</h2>
        <Image src="/main/alice.png" alt="Characters" width={66} height={66} />
        <p className={styles.selectBoxDescription}></p>
      </div>
    </div>
  );
};
export default Charon;
