import classes from "@/components/SearchResults/SearchResults.module.scss";
import { SearchResultsProps } from "@/types";
import useFetchGames from "@/hooks/useFetchGames";
import GamePreviewCard from "@/components/GamePreviewCard/GamePreviewCard";
import GamePreviewCardSkeleton from "../GamePreviewCard/GamePreviewCard.skeleton";

const SearchResults = ({ query }: SearchResultsProps) => {
  const { error, isLoading, games } = useFetchGames({ search: query });

  if (error) {
    if (error === "Internal error") {
      return (
        <div className={classes["search-results"]}>
          <p>
            Sorry, an error has just occurred. Try reloading the page, it should
            help.
          </p>
        </div>
      );
    }
    if (error === "Found nothing") {
      return (
        <div className={classes["search-results"]}>
          <p>Nothing is found.</p>
        </div>
      );
    }
  }

  if (isLoading) {
    return (
      <div className={classes["search-results"]}>
        <GamePreviewCardSkeleton type="search" />
        <GamePreviewCardSkeleton type="search" />
        <GamePreviewCardSkeleton type="search" />
        <GamePreviewCardSkeleton type="search" />
      </div>
    );
  }

  return (
    <div className={classes["search-results"]}>
      {games &&
        games.map((game) => (
          <GamePreviewCard key={game.id} type="search" game={game} />
        ))}
    </div>
  );
};

export default SearchResults;
