import { useEffect, useState } from "react";
import { APIResponseScreenshots, UseFetchScreenshotsType } from "@/types";
import assembleFetchURL from "@/helpers/assembleFetchURL";

const useFetchScreenshots: UseFetchScreenshotsType = (id) => {
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchScreenshots = async (url: string) => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) throw new Error("Internal error");

        const result: APIResponseScreenshots = await response.json();
        if (result.count === 0) throw new Error("Found nothing");

        const receivedSCreenshots: string[] = result.results.map(
          (result) => result.image
        );

        setScreenshots(receivedSCreenshots);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const url = assembleFetchURL({ type: "screenshots", id });
    fetchScreenshots(url);
  }, []);

  return { isError, isLoading, screenshots };
};

export default useFetchScreenshots;
