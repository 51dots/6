import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../components/Index.module.css";

const Gameplay: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TIt7-evX6ww"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Gameplay;
