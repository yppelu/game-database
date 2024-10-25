import classes from "@/components/SearchResults/SearchResults.module.scss";
import { SearchResultsProps } from "@/types";
import useFetchGames from "@/hooks/useFetchGames";
import GamePreviewCard from "@/components/GamePreviewCard/GamePreviewCard";
import GamePreviewCardSkeleton from "@/components/GamePreviewCard/GamePreviewCard.skeleton";

const SearchResults = ({ isVisible, query }: SearchResultsProps) => {
  const { error, isLoading, games } = useFetchGames({ search: query });

  const getComponentContent = () => {
    if (error) {
      if (error === "Internal error") {
        return (
          <p>
            Sorry, an error has just occurred. Try reloading the page, it should
            help.
          </p>
        );
      }
      if (error === "Found nothing") {
        return <p>Nothing is found.</p>;
      }
    }

    if (isLoading) {
      return (
        <>
          <GamePreviewCardSkeleton type="search" />
          <GamePreviewCardSkeleton type="search" />
          <GamePreviewCardSkeleton type="search" />
          <GamePreviewCardSkeleton type="search" />
        </>
      );
    }

    if (games) {
      return games.map((game) => (
        <GamePreviewCard key={game.id} type="search" game={game} />
      ));
    }
  };

  return (
    <ul className={`${classes["search-results"]} ${isVisible ? "" : "hidden"}`}>
      {getComponentContent()}
    </ul>
  );
};

export default SearchResults;
