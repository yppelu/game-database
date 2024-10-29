import { useEffect, useState } from "react";
import {
  APIResponseGameDetails,
  ErrorMessage,
  GameData,
  UseFetchGameType
} from "@/types";
import getErrorMessage from "@/helpers/getErrorMessage";
import assembleFetchURL from "@/helpers/assembleFetchURL";

const useFetchGame: UseFetchGameType = (id) => {
  const [game, setGame] = useState<GameData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorMessage | null>(null);

  useEffect(() => {
    const fetchGame = async (url: string) => {
      setError(null);
      setIsLoading(true);

      try {
        const response = await fetch(url, { mode: "cors" });
        if (response.status === 404) throw new Error("Found nothing");
        if (!response.ok) throw new Error("Internal error");

        const result: APIResponseGameDetails = await response.json();
        const receivedGame: GameData = {
          name: result.name,
          description: result.description,
          backgroundImage: result.background_image ?? undefined,
          platforms: result.parent_platforms?.map(
            (platform) => platform.platform
          ),
          genres: result.genres.map((genre) => genre.name),
          developers: result.developers.map((developer) => developer.name),
          publishers: result.publishers.map((publisher) => publisher.name),
          released: result.released,
          metacritic: result.metacritic ?? undefined
        };

        setGame(receivedGame);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    };

    const url = assembleFetchURL({ type: "game", id });
    fetchGame(url);
  }, []);

  return { error, isLoading, game };
};

export default useFetchGame;
