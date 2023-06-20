import React from "react";
import Link from "next/link";
import Circle from "./Circle";
import styles from "./Citizen.module.css";

const Citizen = () => {
  return (
    <div className={styles.citizenContainer}>
      <div className={styles.profileContainer}>
        <h1>Elite Alysian Citizens</h1>
      </div>
      <div className={styles.bigBox}>
        <Link href="/citizen/0">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/0.png" />
          </div>
        </Link>
        <Link href="/citizen/1">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/1.png" />
          </div>
        </Link>
        <Link href="/citizen/3">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/3.png" />
          </div>
        </Link>
        <Link href="/citizen/35">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/35.png" />
          </div>
        </Link>
        <Link href="/citizen/571">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/571.png" />
          </div>
        </Link>
        <Link href="/citizen/834">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/834.png" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Citizen;
