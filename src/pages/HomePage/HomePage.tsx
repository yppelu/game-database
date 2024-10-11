import CustomLink from "@/components/CustomLink/CustomLink";
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
              <CustomLink
                linkType="plain-link"
                href="https://www.theodinproject.com/"
                isForeign={true}
                text="The Odin Project"
              />{" "}
              assignments. You cannot buy any games here and all of the prices
              are generated to imitate a real game shop.
              <br />
              But feel free to poke around, there are plenty of things.
            </p>
          </div>
          <div className={classes["source-links-wrapper"]}>
            <CustomLink
              linkType="white-link"
              href="https://github.com/yppelu/odin-shopping-cart"
              isForeign={true}
              text="Project Repo"
              img={{
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                alt: "github"
              }}
            />
            <CustomLink
              linkType="white-link"
              href="https://rawg.io/apidocs"
              isForeign={true}
              text="RAWG API"
              img={{
                src: "https://rawg.io/assets/en/apple-icon-120x120.png?v=4",
                alt: "rawg"
              }}
            />
          </div>
        </div>
      </main>
      <video
        className={classes["background-video"]}
        autoPlay
        muted
        loop
        aria-hidden
      >
        <source src="/videos/pyke.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default HomePage;
