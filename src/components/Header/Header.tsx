import styles from "@/components/Header/Header.module.scss";
import { Link } from "react-router-dom";
import SearchForm from "@/components/SearchForm/SearchForm";
import { paths } from "@/helpers/consts";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        className={styles["home-link"]}
        to={paths.home}
        aria-label="Home page"
      >
        <img
          className={styles["home-link__logo"]}
          src={`${paths.images}/logo.svg`}
          alt=""
        />
        <span className={styles["home-link__text"]} aria-hidden>
          Game Database
        </span>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
