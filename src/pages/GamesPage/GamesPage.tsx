import styles from "@/pages/GamesPage/GamesPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FetchRequestParams } from "@/types";
import useFetchGames from "@/hooks/useFetchGames";
import GamePreviewCard from "@/components/GamePreviewCard/GamePreviewCard";
import { paths } from "@/helpers/consts";

const sectionTitles: { [key: string]: string } = {
  "all-games": "All Games",
  "all-time-top": "All Time Top",
  "best-of-the-year": "Best of the Year",
  "popular-in-2023": "Popular in 2023",
  "last-30-days": "Last 30 Days"
};

const GamesPage = () => {
  const navigate = useNavigate();
  const { sectionName } = useParams();
  if (sectionName && !(sectionName in sectionTitles)) {
    navigate(`${paths.home}/games`);
  }

  const title = sectionName
    ? sectionTitles[sectionName]
    : sectionTitles["all-games"];
  document.title = `${title} | Game Database`;

  const gamesFetchOptions: FetchRequestParams = {
    ordering: {
      type: "metascore",
      reversed: true
    },
    page: {
      number: 1,
      size: 20
    }
  };

  if (sectionName === "all-time-top") {
    gamesFetchOptions.page!.size = 250;
  }

  if (sectionName === "best-of-the-year") {
    gamesFetchOptions.dates = {
      startDate: new Date().getFullYear() + "-01" + "-01",
      endDate: new Date().toISOString().slice(0, 10)
    };
  }

  if (sectionName === "best-of-the-year") {
    gamesFetchOptions.dates = {
      startDate: new Date().getFullYear() + "-01" + "-01",
      endDate: new Date().toISOString().slice(0, 10)
    };
  }

  if (sectionName === "popular-in-2023") {
    gamesFetchOptions.dates = {
      startDate: "2023-01-01",
      endDate: "2023-12-31"
    };
  }

  if (sectionName === "last-30-days") {
    gamesFetchOptions.dates = {
      startDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30)
        .toISOString()
        .slice(0, 10),
      endDate: new Date().toISOString().slice(0, 10)
    };
  }

  const { error, isLoading, games } = useFetchGames(gamesFetchOptions);

  if (error) {
    return (
      <>
        <h2>Some error has ocurred!</h2>
        <p>
          We are terribly sorry! Please, try reloading the page. It should help.
        </p>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <section className={styles["games-grid"]}>
        {games.map((game) => (
          <GamePreviewCard key={game.id} type="page" game={game} />
        ))}
      </section>
    </main>
  );
};

export default GamesPage;
