import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./game.module.css";
import Link from "next/link";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />);

const Enfer: NextPage = () => {
  const router = useRouter();

  return (  
  <div className={styles.navContainer}>
      <h2>Enfer</h2>
      <div className={styles.enferBox}>
<LoadImage src="/enfer/enfer.png" />
<p className={styles.imageBoxDescription}>
        <p className={styles.descriptionText}>
        Enfer Ami, a variant of the Ami that have become trapped and lost their way. 
        Beware, for their affliction is contagious. 
        Engage in battles with these troubled creatures, as victory sets them free from their confusion and restores their true essence.
        Distinguish the Enfer Ami by their unmistakable red eyes, a telltale sign of their affliction. 
        Keep a vigilant eye out for these troubled beings as you navigate the cosmic realms. 
        With courage and skill, liberate them from their torment and bring harmony back to Alysia.
    </p></p></div>
      <div className={styles.navBoxGrid}>
{/* Astra */}
        <div className={styles.eBox} 
        role="button"
        onClick={() => router.push(`/ami/species/astra`)}>
          <h2 className={styles.selectBoxTitle}>Astra</h2>
          <Image src="/enfer/eastra.png" alt="astra" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
{/* Guard */}
          <div className={styles.eBox} role="button"
          onClick={() => router.push(`/game/enfer`)}>
          <h2 className={styles.selectBoxTitle}>Guard</h2>
          <Image src="/enfer/guard.png" alt="Prime" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
 {/* Smoot */}
        <div className={styles.eBox} role="button"
          onClick={() => router.push(`/ami/species/smoot`)}>
          <h2 className={styles.selectBoxTitle}>Smoot</h2>
          <Image src="/enfer/esmoot.png" alt="Smoot" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
  {/* Vixel */}
                <div className={styles.eBox} role="button"
          onClick={() => router.push(`/ami/species/vixel`)}>
          <h2 className={styles.selectBoxTitle}>Vixel</h2>
          <Image src="/enfer/evixel.png" alt="Vixel" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
{/* Enfer */}
          <div className={styles.eBox} role="button"
          onClick={() => router.push(`/game/enfer`)}>
          <h2 className={styles.selectBoxTitle}>Soot</h2>
          <Image src="/enfer/esoot.png" alt="Enfer" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>          
{/* Artemis */}
        <div className={styles.eBox} role="button"
          onClick={() => router.push(`/ami/species/artemis`)}>
          <h2 className={styles.selectBoxTitle}>Artemis</h2>
          <Image src="/enfer/eartemis.png" alt="Asrtemis" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p></div>
    </div>
{/* Bottom Link */}
<div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/about" className={styles.mainButton} style={{ textDecoration: "none" }}>
            About Game</Link></div>

  </div>
  );
};

export default Enfer;
