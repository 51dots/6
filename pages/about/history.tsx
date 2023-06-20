import type { NextPage } from "next";
import Image from "next/legacy/image";
import styles from "./story.module.css";
import Link from "next/link";

interface LoadImageProps {
  src: string;
}

const LoadImage: React.FC<LoadImageProps> = ({ src }) => (
  <Image src={src} alt="load" layout="responsive" width={500} height={270} />
);

const History: NextPage = () => {
  return (
    <div className={styles.navContainer}>
      <h2>History</h2>
      <div className={styles.imageBox}>
        <Image
          src="/islands/basecamp/ship.png"
          alt="Nebuchadnezzar"
          width={300}
          height={300}
        />
        <p className={styles.imageBoxDescription}>
          <p className={styles.descriptionText}>
            In the vast tapestry of cosmic history, the protagonist, Leuko, was
            not among the passengers aboard the fabled ship Nebuchadnezzar.
            Instead, their story begins in a distant future shaped by the
            aftermath of a profound historical event. During one of the Hume
            Federation&apos;s daring voyages aboard the Nebuchadnezzar, the
            slumbering crew awoke to the piercing wails of ship alarms,
            shattering their cryosleep. The vessel found itself ensnared in the
            clutches of a ravenous Cosmic Storm, its gravitational force
            threatening to tear the ship apart. Determined to salvage their
            desperate situation, Alice, the sentient artificial intelligence,
            summoned a handful of heroes who valiantly sought to extricate the
            ship from the storm&apos;s grip. Alas, their efforts proved futile,
            and the Nebuchadnezzar succumbed to the tempest&apos;s relentless
            assault, spinning and crumbling amidst the chaos. In a race against
            the disintegration of their vessel, Alice made a crucial decision.
            She placed the surviving Hume back into cryosleep, preserving their
            fragile existence, and unleashing the Alice node DNA Sequencers into
            the unknown abyss. With blind resolve, the Hume hurtled through the
            comic strom, their destination mystical realm in a distant future.
            The release of the DNA Sequencers served as a last-ditch emergency
            measure, a profound paradox initiated by Alice&apos;s ingenuity.
            Invented by the Hume in collaboration with Alice, these sequencers
            were designed to safeguard the genetic diversity of future
            generations in times of crisis. It is through this remarkable
            mechanism that Leuko, the protagonist, was born—a living embodiment
            of the Hume&apos;s legacy, born of the sequencers&apos; miraculous
            preservation. While the Hume lay dormant in cryosleep for countless
            years, their forgotten history and ancestral heritage continued to
            resonate, unbeknownst to the inhabitants of the Androman city.
            Descendants of the Hume Federation, the city&apos;s citizens predate
            the original passengers of the Nebuchadnezzar. Only shortly before
            the game&apos;s commencement do the Hume awaken from their prolonged
            slumber, ready to embark on a new chapter fraught with intrigue,
            discovery, and the fulfillment of their forgotten destinies. Thus,
            the tale of Leuko and the Hume&apos;s awakening unfolds against the
            backdrop of a mysterious land of Alysia, bearing witness to the
            convergence of past and future, and the interplay of forgotten
            legacies and untold potential. It is within this intricate tapestry
            that Leuko&apos;s journey takes flight, intertwined with the
            enigmatic Androman city and the revelation of their true purpose in
            the grand cosmic narrative.
          </p>
        </p>
      </div>
      {/* Bottom Link */}
      <div style={{ marginTop: 32, marginBottom: 32 }}>
        <Link
          href="/game"
          className={styles.mainButton}
          style={{ textDecoration: "none" }}
        >
          To Game
        </Link>
      </div>
    </div>
  );
};

export default History;
