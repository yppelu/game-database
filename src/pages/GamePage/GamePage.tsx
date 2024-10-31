import styles from "@/pages/GamePage/GamePage.module.scss";
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "@/types";
import useFetchGame from "@/hooks/useFetchGame";
import GamePageSkeleton from "@/pages/GamePage/GamePage.skeleton";
import formatDate from "@/helpers/formatDate";
import ImageCarouselSkeleton from "@/components/ImageCarousel/ImageCarousel.skeleton";

const ImageCarouselLazy = lazy(
  () => import("@/components/ImageCarousel/ImageCarousel")
);
const ImageCarousel = (id: number) => {
  return (
    <Suspense fallback={<ImageCarouselSkeleton />}>
      <ImageCarouselLazy id={id} />
    </Suspense>
  );
};

const ErrorBlock = (error: ErrorMessage) => {
  return (
    <main className={styles.main}>
      <h2>Some error has ocurred!</h2>
      <p>
        {error === "Internal error"
          ? "We are terribly sorry! Please, try reloading the page. It should help."
          : "There is no such game, sorry."}
      </p>
    </main>
  );
};

const GamePage = () => {
  const { gameId } = useParams();
  const { error, isLoading, game } = useFetchGame(Number(gameId));

  if (error) {
    document.title = `${error} | Game Database`;
  } else if (isLoading) {
    document.title = "Loading game... | Game Database";
  } else if (!game) {
    document.title = "Found nothing | Game Database";
  } else {
    document.title = `${game.name} | Game Database`;
  }

  return (
    <>
      <div className={styles["load-status-live-region"]} role="status">
        {error ? error : isLoading ? "Loading" : "Loaded"}
      </div>
      {error && ErrorBlock(error)}
      {isLoading && <GamePageSkeleton />}
      {!error && !isLoading && !game && ErrorBlock("Found nothing")}
      {game && (
        <>
          <div
            className={styles["background-image"]}
            style={{ backgroundImage: `url(${game.backgroundImage})` }}
            aria-hidden
          ></div>
          <div className={styles["background-image-cover"]} aria-hidden></div>
          <main className={styles.main}>
            <h1 className={styles["game-title"]}>{game.name}</h1>
            {ImageCarousel(Number(gameId))}
            <section>
              <h2 className={styles["section-title"]}>About</h2>
              <div className={styles["about-wrapper"]}>
                <section className={styles["description"]}>
                  {game.description}
                </section>
                <div className={styles["additional-info"]}>
                  {game.platforms && (
                    <section>
                      <h3 className={styles["additional-info-subtitle"]}>
                        Platforms
                      </h3>
                      <p>
                        {game.platforms
                          .map((platform) => platform.name)
                          .join(", ")}
                      </p>
                    </section>
                  )}
                  <section>
                    <h3 className={styles["additional-info-subtitle"]}>
                      Genres
                    </h3>
                    <p>{game.genres.join(", ")}</p>
                  </section>
                  <section>
                    <h3 className={styles["additional-info-subtitle"]}>
                      Developers
                    </h3>
                    <p>{game.developers.join(", ")}</p>
                  </section>
                  {game.publishers.length ? (
                    <section>
                      <h3 className={styles["additional-info-subtitle"]}>
                        Publishers
                      </h3>
                      <p>{game.publishers.join(", ")}</p>
                    </section>
                  ) : null}
                  <section>
                    <h3 className={styles["additional-info-subtitle"]}>
                      Release date
                    </h3>
                    <p>{formatDate(game.released)}</p>
                  </section>
                  {game.metacritic && (
                    <section>
                      <h3 className={styles["additional-info-subtitle"]}>
                        Metascore
                      </h3>
                      <p className={styles["metacritic-block"]}>
                        {game.metacritic}
                      </p>
                    </section>
                  )}
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default GamePage;
