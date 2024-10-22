import classes from "@/components/GamePreviewCard/GamePreviewCard.module.scss";
import { GamePreviewCardProps } from "@/types";

const GamePreviewCardSkeleton = ({
  type
}: Pick<GamePreviewCardProps, "type">) => {
  return (
    <div
      className={`${classes.card} ${type === "search" ? classes.search : classes.page} ${classes.skeleton}`}
    >
      <div className={classes.image}></div>
      <div className={classes.description}>
        <div className={classes.title}></div>
        <div className={classes.platforms}></div>
      </div>
    </div>
  );
};

export default GamePreviewCardSkeleton;
