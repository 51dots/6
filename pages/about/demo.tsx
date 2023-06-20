import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./story.module.css";
import Timer from "../../components/Timer/timer";
import { demoDate } from "../../components/constant";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image
    src={src}
    alt="load"
    width={500}
    height={270}
    sizes="100vw"
    style={{
      width: "100%",
      height: "auto"
    }} />
);

const Demo: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Race To Eden</h2>
      <Timer date={demoDate} />
      <div className={styles.imageBox}>
        <p className={styles.imageBoxDescription}>
          <LoadImage src="/islands/theia/theia.png" />
          <p className={styles.descriptionText}>
            Embark on an epic quest as Leuko Kuneli. Frome Base Camp to Rhea to
            Theia to Mnemsonyne to Eden
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
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Charon */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/about/items/charon`)}
        >
          <h2 className={styles.selectBoxTitle}>Charon Stone</h2>
          <Image
            src="/main/charon.png"
            alt="Charon"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
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
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Basecamp */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians/about/basecamp`)}
        >
          <h2 className={styles.selectBoxTitle}>Basecamp</h2>
          <Image
            src="/main/base.png"
            alt="Base Camp"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        {/* Rhea */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians/islands/rhea`)}
        >
          <h2 className={styles.selectBoxTitle}>Rhea</h2>
          <Image
            src="/main/treehouse.png"
            alt="Tree House"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
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
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Mnemosyne */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/alysians/islands/mnemosyne`)}
        >
          <h2 className={styles.selectBoxTitle}>Mnemosyne</h2>
          <Image
            src="/main/clocktower.png"
            alt="Clocktower"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
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
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>

        {/* Ami */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/ami/species`)}
        >
          <h2 className={styles.selectBoxTitle}>Ami</h2>
          <Image
            src="/ami/smoothome.png"
            alt="Ami"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
        {/* Enfer */}
        <div
          className={styles.Box}
          role="button"
          onClick={() => router.push(`/game/enfer`)}
        >
          <h2 className={styles.selectBoxTitle}>Enfer</h2>
          <Image
            src="/enfer/guard.png"
            alt="Enfer"
            width={121}
            height={121}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={styles.selectBoxDescription}></p>
        </div>
      </div>

      {/* Discord Link */}
      <p>Visit the Discord for access keys</p>

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
      <p>More Astras to Mint On the Way</p>
      {/* Playtest */}
      <div
        className={styles.navBox}
        role="button"
        onClick={() => router.push(`https://game.ahootdigital.com`)}
      >
        <h2 className={styles.selectBoxTitle}>
          Closed Beta Playtest for Ami Holders
        </h2>
        <Image
          src="/ami/astra.png"
          alt="playtest"
          width={121}
          height={121}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <p className={styles.selectBoxDescription}>Starts In</p>
        <Timer date={demoDate} />
      </div>
    </div>
  );
};
export default Demo;
