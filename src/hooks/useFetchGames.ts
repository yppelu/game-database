import { useEffect, useState } from "react";
import {
  APIResponseListOfGames,
  ErrorMessage,
  GamePreviewData,
  UseFetchGamesType
} from "@/types";
import getErrorMessage from "@/helpers/getErrorMessage";
import assembleFetchURL from "@/helpers/assembleFetchURL";

const useFetchGames: UseFetchGamesType = (options = {}) => {
  const [games, setGames] = useState<GamePreviewData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorMessage | null>(null);

  useEffect(() => {
    const fetchGames = async (url: string) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) throw new Error("Internal error");

        const result: APIResponseListOfGames = await response.json();
        if (result.count === 0) throw new Error("Found nothing");

        const receivedGames: GamePreviewData[] = result.results
          .filter((game) => Boolean(game.background_image))
          .map((game) => ({
            id: game.id,
            name: game.name,
            backgroundImage: game.background_image as string,
            platforms: game.parent_platforms
              ? game.parent_platforms.map((platform) => ({
                  id: platform.platform.id,
                  name: platform.platform.name
                }))
              : []
          }));

        setGames(receivedGames);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    };

    const url = assembleFetchURL(options);

    fetchGames(url);
  }, [JSON.stringify(options)]);

  return { error, isLoading, games };
};

export default useFetchGames;
