import { useEffect, useState } from "react";
import { APIResponseListOfGames, UseFetchGamesType } from "@/types";
import getErrorMessage from "@/helpers/getErrorMessage";
import assembleFetchURL from "@/helpers/assembleFetchURL";

const useFetchGames: UseFetchGamesType = (options = {}) => {
  const [games, setGames] = useState<ReturnType<UseFetchGamesType>["games"]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] =
    useState<ReturnType<UseFetchGamesType>["error"]>(null);

  useEffect(() => {
    const fetchGames = async (url: string) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) throw new Error("Internal error");

        const result: APIResponseListOfGames = await response.json();
        if (result.count === 0) throw new Error("Found nothing");

        const games = result.results.map((game) => ({
          id: game.id,
          name: game.name,
          backgroundImage: game.background_image,
          platforms: game.parent_platforms.map(
            (platform) => platform.platform.name
          )
        }));

        setGames(games);
        setError(null);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    };

    const url = assembleFetchURL(options);

    fetchGames(url);
  }, []);

  return { error, isLoading, games };
};

export default useFetchGames;
