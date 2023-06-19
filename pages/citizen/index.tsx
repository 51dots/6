import React from "react";
import Link from "next/link";
import Circle from "./Circle";
import styles from "./Citizen.module.css";

const Citizen = () => {
  return (
    <div className={styles.citizenContainer}>
      <div className={styles.profileContainer}>
        <h1>Your Alysian Citizens</h1>
      </div>
      <div className={styles.bigBox}>
        <Link href="/citizen/0">
          <a className={styles.circleLink}>
            <Circle src="/citizen/pfp/0.png" />
          </a>
        </Link>
        <Link href="/citizen/1">
          <a className={styles.circleLink}>
            <Circle src="/citizen/pfp/1.png" />
          </a>
        </Link>
        <Link href="/citizen/2">
          <a className={styles.circleLink}>
            <Circle src="/citizen/pfp/2.png" />
          </a>
        </Link>
        <Link href="/citizen/3">
          <a className={styles.circleLink}>
            <Circle src="/citizen/pfp/3.png" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Citizen;
