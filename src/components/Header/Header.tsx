import classes from "@/components/Header/Header.module.scss";
import { Link } from "react-router-dom";
import SearchForm from "@/components/SearchForm/SearchForm";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes["home-link"]} to="/" aria-label="Home page">
        <img
          className={classes["home-link__logo"]}
          src="/images/logo.svg"
          alt=""
        />
        <span className={classes["home-link__text"]} aria-hidden>
          Game Database
        </span>
      </Link>
      <SearchForm />
    </header>
  );
};

export default Header;
