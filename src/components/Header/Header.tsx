import classes from "@/components/Header/Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <header className={classes.header}>
      <Link className={classes["home-link"]} to="/">
        <img className={classes.logo} src="/images/logo.svg" alt="Home page" />
        <span className={classes["home-link-text"]} aria-hidden="true">
          Game Database
        </span>
      </Link>
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
    </header>
  );
}

export default Header;
