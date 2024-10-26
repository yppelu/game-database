import styles from "@/components/SearchResults/SearchResults.module.scss";
import { SearchResultsProps } from "@/types";
import useFetchGames from "@/hooks/useFetchGames";
import GamePreviewCard from "@/components/GamePreviewCard/GamePreviewCard";
import GamePreviewCardSkeleton from "@/components/GamePreviewCard/GamePreviewCard.skeleton";

const SearchResults = ({ isVisible, query }: SearchResultsProps) => {
  const { error, isLoading, games } = useFetchGames({ search: query });

  const getComponentContent = () => {
    if (isLoading) {
      return (
        <>
          {[1, 2, 3, 4].map((el) => (
            <li key={el}>
              <GamePreviewCardSkeleton type="search" />
            </li>
          ))}
        </>
      );
    }

    if (games) {
      return games.map((game) => (
        <li key={game.id}>
          <GamePreviewCard type="search" game={game} />
        </li>
      ));
    }
  };

  return (
    <>
      <div className={styles["search-status-live-region"]} role="status">
        {error ? error : isLoading ? "Loading" : "Loaded"}
      </div>

      <section
        className={`${styles["search-results"]} ${isVisible ? "" : styles.hidden}`}
      >
        <h2 className={styles.title}>Search Results</h2>
        {error === "Internal error" && (
          <p>
            An internal error has just occurred. Try reloading the page, it may
            help.
          </p>
        )}
        {error === "Found nothing" && (
          <p>Nothing is found. Try another query.</p>
        )}
        {!error && <ul>{getComponentContent()}</ul>}
      </section>
    </>
  );
};

export default SearchResults;
