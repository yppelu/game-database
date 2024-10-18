import classes from "@/components/Header/Header.module.scss";
import { Link } from "react-router-dom";
import SearchForm from "@/components/SearchForm/SearchForm";

function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes["home-link"]} to="/">
        <img
          className={classes["home-link__logo"]}
          src="/images/logo.svg"
          alt="Home page"
        />
        <span className={classes["home-link__text"]} aria-hidden>
          Game Database
        </span>
      </Link>
      <SearchForm />
    </header>
  );
}

export default Header;
