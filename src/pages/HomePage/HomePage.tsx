import CustomLink from "@/components/CustomLink/CustomLink";
import { CustomLinkProps } from "@/components/CustomLink/CustomLinkTypes";
import classes from "@/pages/HomePage/HomePage.module.scss";

const navItems: CustomLinkProps[] = [
  {
    linkType: "white-link",
    href: "#",
    text: "All Games",
    isForeign: false,
    img: {
      alt: "all games",
      src: "/images/view-list.svg"
    }
  },
  {
    linkType: "white-link",
    href: "#",
    text: "Last 30 Days",
    isForeign: false,
    img: {
      alt: "last 30 days",
      src: "/images/star.svg"
    }
  },
  {
    linkType: "white-link",
    href: "#",
    text: "Popular in 2023",
    isForeign: false,
    img: {
      alt: "popular in 2023",
      src: "/images/pedestal.svg"
    }
  },
  {
    linkType: "white-link",
    href: "#",
    text: "Best of the Year",
    isForeign: false,
    img: {
      alt: "best of the year",
      src: "/images/cup.svg"
    }
  },
  {
    linkType: "white-link",
    href: "#",
    text: "All Time Top",
    isForeign: false,
    img: {
      alt: "all time top",
      src: "/images/crown.svg"
    }
  }
];

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
        <nav className={classes.nav}>
          <h2 className={classes["nav-title"]}>Quick Navigation</h2>
          <ul className={classes["nav-list"]}>
            {navItems.map((item) => (
              <li key={item.text}>
                <CustomLink {...item} />
              </li>
            ))}
          </ul>
        </nav>
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
