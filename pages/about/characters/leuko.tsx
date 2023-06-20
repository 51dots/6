import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../story.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={300} height={300} />
);

const Leuko: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Leuko Kuneli</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/characters/leuko0.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Meet Leuko Kuneli, the young protagonist burdened with teenage angst
            and a restless spirit. With the unique ability to swap consciousness
            with those in cryo pods, Leuko embarks on mischievous explorations
            in different Hume bodies, unaware of the greater reality lurking
            beyond the Alysian Islands. However, driven by an insatiable longing
            for freedom, Leuko sets off on a transformative adventure that leads
            them to rally the people of Androman City and uncover the hidden
            secrets of the crash of the Hume Federation. Throughout their
            journey in the Andromaverse, Leuko confronts personal fears,
            challenges preconceived notions, and matures into a heroic figure,
            ready to face the formidable enfers threatening the Ami. Join Leuko
            on an exhilarating quest of personal growth, courage, and
            self-discovery, as they strive to save the Ami and restore balance
            to the realm of Alysia.
          </p>
        </p>
      </div>

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
export default Leuko;
