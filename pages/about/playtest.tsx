import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "./story.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />
);

const Playtest: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Journey to Theia</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/islands/theia/theia.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Embark on an epic quest as Leuko Kuneli. Gear up at Base Camp, where
            you&apos;ll equip yourself and choose your loyal Ami companion to
            join you in battle. Prepare to unleash your fearless spirit as you
            conquer the treacherous Theia Corridor in the enchanting Alysian
            Forest, facing diverse challenges that will test your mettle.
          </p>
          <p className={styles.descriptionText}>
            Explore the mechanics of evolving and utilizing the coveted Charon
            stone as you journey to the mystical village of Theia. Discover the
            secrets hidden within and unlock the power of purification to obtain
            a second Ami companion. With your trusted allies by your side,
            venture forth on a daring solo mission to save Theia from imminent
            danger. Immerse yourself in a world where the forces of nature shape
            your destiny, and every choice you make shapes your heroic tale.
            Join us as a playtester, where your skills, courage, and strategic
            thinking will be put to the ultimate test. The fate of Alysia rests
            in your hands!
          </p>
        </p>
      </div>
      <h2>Debrief Material</h2>
      <div className={styles.navBoxGrid}>
        {/* Leuko Kuneli */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/characters/leuko`)}
        >
          <h2 className={styles.selectBoxTitle}>Leuko Kuneli</h2>
          <Image
            src="/characters/leuko0.png"
            alt="Leuko"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Theia */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians/islands/theia`)}
        >
          <h2 className={styles.selectBoxTitle}>Theia</h2>
          <Image
            src="/islands/theia/observatory.png"
            alt="Observatory"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Charon */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/items/charon`)}
        >
          <h2 className={styles.selectBoxTitle}>Charon Stone</h2>
          <Image src="/main/charon.png" alt="Charon" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Arnav */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/characters/arnav`)}
        >
          <h2 className={styles.selectBoxTitle}>Arnav</h2>
          <Image
            src="/characters/arnav.png"
            alt="Arnav"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* History */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/history`)}
        >
          <h2 className={styles.selectBoxTitle}>History</h2>
          <Image
            src="/main/badgea.png"
            alt="History"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Sc0 */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/characters/sc`)}
        >
          <h2 className={styles.selectBoxTitle}>Sc0</h2>
          <Image src="/gifs/sc0.gif" alt="sc0" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Ami */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/ami/species`)}
        >
          <h2 className={styles.selectBoxTitle}>Ami</h2>
          <Image src="/ami/smoothome.png" alt="Ami" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Gameplay */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/game/gameplay`)}
        >
          <h2 className={styles.selectBoxTitle}>Video Gameplay</h2>
          <Image
            src="/main/alicetv.png"
            alt="gameplay"
            width={121}
            height={121}
          />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Enfer */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/game/enfer`)}
        >
          <h2 className={styles.selectBoxTitle}>Enfer</h2>
          <Image src="/enfer/guard.png" alt="Enfer" width={121} height={121} />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>

      <div className={styles.imageBox}>
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Visit the Discord for access keys.
          </p>
          {/* Discord Link */}

          <br></br>
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
            />
          </a>
        </p>
        {/* Ami Mint Page */}
        <div className={styles.navBoxGrid}>
          <div
            className={styles.Box}
            role="button"
            onClick={() => router.push(`/ami/mint`)}
          >
            <h2 className={styles.selectBoxTitle}>Mint Ami</h2>
            <Image
              src="/ami/astra.png"
              alt="artemisf"
              width={121}
              height={121}
            />
            <p className={styles.selectBoxDescription}>
              Minting will be available again soon.
            </p>
          </div>
          {/* Playtest */}
          <div
            className={styles.Box}
            role="button"
            onClick={() => router.push(`https://game.ahootdigital.com`)}
          >
            <h2 className={styles.selectBoxTitle}>Begin Playtest</h2>
            <Image
              src="/main/portal.png"
              alt="playtest"
              width={121}
              height={121}
            />
            <p className={styles.selectBoxDescription}></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Playtest;
