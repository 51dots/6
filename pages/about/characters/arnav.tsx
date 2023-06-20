import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import styles from "../story.module.css";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={300} height={300} />
);

const Arnav: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <h2>Arnav</h2>
      <div className={styles.imageBox}>
        <LoadImage src="/characters/arnav.png" />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            Arnav, rival of the protagonist, Leuko Kuneli. Unlike Leuko&apos;s
            rebellious nature, Arnav is a beloved figure in Androman City,
            admired for his conformity and obedience. As the embodiment of
            societal norms, Arnav&apos;s popularity stems from his adherence to
            established rules and expectations. This creates a compelling
            contrast with Leuko, who challenges the status quo. Arnav&apos;s
            role extends beyond mere opposition, serving as a constant reminder
            of the alternative path Leuko could have taken. Their dynamic
            explores themes of individuality, societal expectations, and the
            choices we make when faced with conformity. Discover the depths of
            this intriguing rivalry as it shapes the world of Alysia and prompts
            profound introspection.
          </p>
        </p>
      </div>
      <div className={styles.navBoxGrid}></div>

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

export default Arnav;
