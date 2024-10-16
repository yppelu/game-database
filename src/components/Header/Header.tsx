import classes from "@/components/Header/Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchInput, setSearchInput] = useState<string>("");

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
      <form
        className={classes["search-form"]}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className={classes["search-input"]}
          type="search"
          name="search"
          placeholder="Search games..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </form>
    </header>
  );
}

export default Header;
