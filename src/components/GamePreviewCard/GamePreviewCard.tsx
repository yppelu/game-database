import styles from "@/components/GamePreviewCard/GamePreviewCard.module.scss";
import { Link } from "react-router-dom";
import { GamePreviewCardProps, Platform } from "@/types";
import { platformSrcs } from "@/helpers/consts";

const GamePreviewCard = ({ type, game }: GamePreviewCardProps) => {
  const getPlatformsWithUniqueLogos = (platforms: Platform[]): Platform[] => {
    const visited = new Set<Platform["id"]>();
    const unique: Platform[] = [];

    for (const platform of platforms) {
      if (!visited.has(platform.id)) {
        unique.push(platform);
        for (const platformId in platformSrcs) {
          if (platformSrcs[platform.id] === platformSrcs[platformId]) {
            visited.add(Number(platformId));
          }
        }
      }
    }

    return unique;
  };

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
          {getPlatformsWithUniqueLogos(game.platforms).map((platform) =>
            platform.id in platformSrcs ? (
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
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default GamePreviewCard;
