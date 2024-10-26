import styles from "@/pages/HomePage/HomePage.module.scss";
import { CustomLinkProps } from "@/types";
import CustomLink from "@/components/CustomLink/CustomLink";

const navItems: CustomLinkProps[] = [
  {
    linkType: "white-link",
    href: "/games",
    text: "All Games",
    isForeign: false,
    img: {
      src: "/images/view-list.svg"
    }
  },
  {
    linkType: "white-link",
    href: "/games/last-30-days",
    text: "Last 30 Days",
    isForeign: false,
    img: {
      src: "/images/star.svg"
    }
  },
  {
    linkType: "white-link",
    href: "/games/popular-in-2023",
    text: "Popular in 2023",
    isForeign: false,
    img: {
      src: "/images/pedestal.svg"
    }
  },
  {
    linkType: "white-link",
    href: "/games/best-of-the-year",
    text: "Best of the Year",
    isForeign: false,
    img: {
      src: "/images/cup.svg"
    }
  },
  {
    linkType: "white-link",
    href: "/games/all-time-top",
    text: "All Time Top",
    isForeign: false,
    img: {
      src: "/images/crown.svg"
    }
  }
];

const HomePage = () => {
  document.title = "Home | Game Database";

  return (
    <>
      <main className={styles.main}>
        <section className={styles["description-wrapper"]}>
          <div className={styles.description}>
            <h1 className={styles.title}>Game Database</h1>
            <p>
              It is a remake of{" "}
              <CustomLink
                linkType="plain-link"
                href="https://yppelu-odin-shopping-cart.netlify.app/"
                isForeign={true}
                text="my Shopping Cart project"
              />{" "}
              which is a solution to one of{" "}
              <CustomLink
                linkType="plain-link"
                href="https://www.theodinproject.com/"
                isForeign={true}
                text="The Odin Project"
              />{" "}
              assignments. Although the original project resembles an e-commerce
              website, this one lacks such functionality, because my intentions
              now are but to practise some new tools.
            </p>
          </div>
          <div className={styles["source-links-wrapper"]}>
            <CustomLink
              linkType="white-link"
              href="https://github.com/yppelu/odin-shopping-cart"
              isForeign={true}
              text="Project Repo"
              img={{
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              }}
            />
            <CustomLink
              linkType="white-link"
              href="https://rawg.io/apidocs"
              isForeign={true}
              text="RAWG API"
              img={{
                src: "https://rawg.io/assets/en/apple-icon-120x120.png?v=4"
              }}
            />
          </div>
        </section>
        <nav className={styles.nav}>
          <h2 className={styles.nav__title}>Quick Navigation</h2>
          <ul className={styles.nav__list}>
            {navItems.map((item) => (
              <li key={item.text}>
                <CustomLink {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <video
        className={styles["background-video"]}
        autoPlay
        muted
        loop
        aria-hidden
      >
        <source src="/videos/pyke.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default HomePage;
