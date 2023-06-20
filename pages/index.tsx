import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../components/Index.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image
    src={src}
    alt="Andromaverse"
    width={904}
    height={209}
    // Set different sizes for different screen widths
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{
      width: "100%",
      height: "auto"
    }} />
);

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      {/* Top Logo */}
      <div className={styles.imageBox}>
        <LoadImage src="/main/escape.png" />
      </div>

      <div className={`${styles.navBoxGrid} navBoxGrid`}>
        {/* About*/}
        <div
          className={styles.navImage}
          role="button"
          onClick={() => router.push(`/about`)}
        >
          <h2 className={styles.selectBoxTitle}>About Game</h2>
          <Image
            src="/gifs/sc0.gif"
            alt="About"
            width={121}
            height={121}
            // Set different sizes for different screen widths
            sizes="(max-width: 768px) 50vw, 20vw"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        {/* Theia Playtest */}{" "}
        {/*
        <div
          className={styles.navImage}
          role="button"
          onClick={() => router.push(`/about/playtest`)}
        >
          <h2 className={styles.selectBoxTitle}>Theia Playtest II</h2>
          <Image
            src="/islands/theia/observatory.png"
            alt="Playtest"
            width={121}
            height={121}
            sizes="(max-width: 768px) 50vw, 20vw" // Set different sizes for different screen widths
          />
          <Timer date={playDate} />
          Prize For First
        </div> 
      */}
        {/* Collectibles Page */}
        <div
          className={styles.navImage}
          role="button"
          onClick={() => router.push(`/collectibles`)}
        >
          <h2 className={styles.selectBoxTitle}>Collectibles</h2>
          <Image
            src="/gifs/ladf.gif"
            alt="Collectibles"
            width={121}
            height={121}
            // Set different sizes for different screen widths
            sizes="(max-width: 768px) 50vw, 20vw"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>

      {/* Quick Links */}
      {/* <h2>Happening Now</h2>
      <div className={styles.navGrid}>
        <div className={styles.navBox}>
          <Link href="/alysians/mint">Alysians Now Minting!</Link>
        </div>
         <div className={styles.navBox}>
          <Link href="/listing/loot">Loot is Openable!</Link>
        </div>    
        <div className={styles.navBox}>
          Ami Now Minting!
          <Link href="/ami/mint"></Link>
        </div>
    
      </div>*/}
    </div>
  );
};

export default Home;
