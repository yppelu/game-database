import styles from "@/pages/GamePage/GamePage.module.scss";
import ImageCarouselSkeleton from "@/components/ImageCarousel/ImageCarousel.skeleton";

const GamePageSkeleton = () => {
  return (
    <div className={`${styles.main} ${styles.skeleton}`}>
      <div className={styles["game-title"]}></div>
      <ImageCarouselSkeleton />
      <div>
        <div className={styles["section-title"]}></div>
        <div className={styles["about-wrapper"]}>
          <div className={styles["description"]}></div>
          <div className={styles["additional-info"]}>
            <div>
              <div className={styles["additional-info-subtitle"]}></div>
              <div className={styles["additional-info-body"]}></div>
            </div>
            <div>
              <div className={styles["additional-info-subtitle"]}></div>
              <div className={styles["additional-info-body"]}></div>
            </div>
            <div>
              <div className={styles["additional-info-subtitle"]}></div>
              <div className={styles["additional-info-body"]}></div>
            </div>
            <div>
              <div className={styles["additional-info-subtitle"]}></div>
              <div className={styles["additional-info-body"]}></div>
            </div>
            <div>
              <div className={styles["additional-info-subtitle"]}></div>
              <div className={styles["additional-info-body"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePageSkeleton;
