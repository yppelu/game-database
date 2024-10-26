import styles from "@/components/GamePreviewCard/GamePreviewCard.module.scss";
import { Link } from "react-router-dom";
import { GamePreviewCardProps } from "@/types";
import getPlatformsWithUniqueLogos from "@/helpers/getPlatformsWithUniqueLogos";
import { platformSrcs } from "@/helpers/consts";

const GamePreviewCard = ({ type, game }: GamePreviewCardProps) => {
  const platforms = getPlatformsWithUniqueLogos(game.platforms);

  return (
    <div
      className={`${styles.card} ${type === "search" ? styles.search : styles.page}`}
    >
      <img
        className={styles.image}
        src={game.backgroundImage}
        alt={`${game.name} preview`}
        aria-hidden
      />
      <div className={styles.description}>
        <h3 className={styles.title}>
          <Link to={`/games/game/${game.id}`}>{game.name}</Link>
        </h3>
        <h4 className={styles["platforms-list-title"]}>Platforms</h4>
        <ul className={styles.platforms}>
          {platforms.map((platform) => (
            <li className={styles.platform} key={platform.id}>
              <span className={styles["platform-name"]}>{platform.name}</span>
              <img
                className={styles["platform-image"]}
                src={platformSrcs[platform.id]}
                alt={platform.name}
                title={platform.name}
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GamePreviewCard;
