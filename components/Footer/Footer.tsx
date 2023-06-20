import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className={styles.footNav}>
      <div className={styles.footerLeft} />
      <div className={styles.footerRight}>

        <a
          href={`https://discord.gg/etfuaFsQKy`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src="/main/discord.png"
            className={styles.profileImage}
            width={33}
            height={33}
            alt="Discord"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </a>

        <a
          href={`https://twitter.com/andromaverse`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src="/main/twitter.png"
            className={styles.profileImage}
            width={24}
            height={24}
            alt="Twitter"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </a>
      </div>
    </nav>
  );
}
