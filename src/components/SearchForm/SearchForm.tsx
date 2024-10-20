import classes from "@/components/SearchForm/SearchForm.module.scss";
import { useState } from "react";
import SearchResults from "@/components/SearchResults/SearchResults";
import useDebounceValue from "@/hooks/useDebounceValue";

const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const searchQuery = useDebounceValue<string>(
    searchInputValue,
    1000,
    searchInputValue === ""
  );

  return (
    <form
      className={classes["search-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={classes["search-input"]}
        type="search"
        name="search"
        placeholder="Search games..."
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      {searchQuery && <SearchResults query={searchQuery} />}
    </form>
  );
};

export default SearchForm;
