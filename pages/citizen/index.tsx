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
      <div className={styles.profileContainer}>
        <h2>Mint an Idendity Pack for Early Access</h2>
      </div>
      <div className={styles.bigBox}>
        <div className={styles.circleRow}>
          <Link href="/citizen/0">
            <div className={styles.circleLink}>
              <Circle src="/citizen/pfp/0.png" />
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
        </div>
      </div>
      <div className={styles.circleRow}>
        <Link href="/citizen/834">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/834.png" />
          </div>
        </Link>
        <Link href="/citizen/8889">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/8889.png" />
          </div>
        </Link>
        <Link href="/citizen/8900">
          <div className={styles.circleLink}>
            <Circle src="/citizen/pfp/8900.png" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Citizen;
