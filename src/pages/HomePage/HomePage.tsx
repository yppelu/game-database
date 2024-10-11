import classes from "@/pages/HomePage/HomePage.module.scss";

function HomePage() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes["description-wrapper"]}>
          <div className={classes.description}>
            <h1 className={classes.title}>Game Database</h1>
            <p>
              It is not a commercial project, but a solution to one of{" "}
              <a
                className={classes["link-inside-text"]}
                href="https://www.theodinproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project
              </a>{" "}
              assignments. You cannot buy any games here and all of the prices
              are generated to imitate a real game shop.
              <br />
              But feel free to poke around, there are plenty of things.
            </p>
          </div>
          <div className={classes["source-links-wrapper"]}>
            <a
              className={classes["source-link"]}
              href="https://github.com/yppelu/odin-shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes["source-link-icon"]}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="github"
                aria-hidden="true"
              />
              Project Repo
            </a>
            <a
              className={classes["source-link"]}
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes["source-link-icon"]}
                src="https://rawg.io/assets/en/apple-icon-120x120.png?v=4"
                alt="rawg api"
                aria-hidden="true"
              />
              RAWG API
            </a>
          </div>
        </div>
      </main>
      <video
        className={classes["background-video"]}
        autoPlay
        muted
        loop
        aria-hidden="true"
      >
        <source src="/videos/pyke.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default HomePage;
