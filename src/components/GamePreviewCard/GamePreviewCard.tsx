import classes from "@/components/GamePreviewCard/GamePreviewCard.module.scss";
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
      className={`${classes.card} ${type === "search" ? classes.search : classes.page}`}
    >
      <img
        className={classes.image}
        src={game.backgroundImage}
        alt={`${game.name} preview`}
        aria-hidden
      />
      <div className={classes.description}>
        <Link className={classes.title} to={`/games/game/${game.id}`}>
          {game.name}
        </Link>
        <div className={classes.platforms}>
          {getPlatformsWithUniqueLogos(game.platforms).map((platform) =>
            platform.id in platformSrcs ? (
              <img
                key={platform.id}
                className={classes.platform}
                src={platformSrcs[platform.id]}
                alt={platform.name}
                title={platform.name}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePreviewCard;
