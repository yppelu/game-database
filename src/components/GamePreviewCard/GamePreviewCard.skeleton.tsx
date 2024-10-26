import styles from "@/components/GamePreviewCard/GamePreviewCard.module.scss";
import { GamePreviewCardProps } from "@/types";

const GamePreviewCardSkeleton = ({
  type
}: Pick<GamePreviewCardProps, "type">) => {
  return (
    <div
      className={`${styles.card} ${type === "search" ? styles.search : styles.page} ${styles.skeleton}`}
    >
      <div className={styles.image}></div>
      <div className={styles.description}>
        <div className={styles.title}></div>
        <div className={styles.platforms}></div>
      </div>
    </div>
  );
};

export default GamePreviewCardSkeleton;
