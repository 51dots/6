import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import isle from "../../public/main/isle.png";
import anon from "../../public/main/user.png";

export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image src={isle} width={72} height={72} alt="Smoot" />
          </Link>

          <div className={styles.navMiddle}>
            <Link className={styles.link} href={`https://andromaverse.io`}>
              <Image
                src="/islands/basecamp/base.png"
                className={styles.profileImage}
                width={30}
                height={30}
                alt="Home"
              />
            </Link>

            <Link
              className={styles.link}
              href={`https://andromaverse.io/about`}
            >
              <Image
                src="/gifs/sc0.gif"
                className={styles.profileImage}
                width={37}
                height={37}
                alt="About"
              />
            </Link>

            <Link
              className={styles.link}
              href={`https://andromaverse.io/collectibles`}
            >
              <Image
                src="/gifs/ladf.gif"
                className={styles.profileImage}
                width={43}
                height={43}
                alt="Collectibles"
              />
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link
              className={styles.link}
              href={`https://andromaverse.io/profile/${address}`}
            >
              <Image
                src={anon}
                className={styles.profileImage}
                width={40}
                height={40}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
