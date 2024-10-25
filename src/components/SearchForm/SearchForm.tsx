import classes from "@/components/SearchForm/SearchForm.module.scss";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import SearchResults from "@/components/SearchResults/SearchResults";
import useDebounceValue from "@/hooks/useDebounceValue";
import { useLocation } from "react-router-dom";

const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const searchQuery = useDebounceValue<string>(
    searchInputValue,
    1000,
    searchInputValue === ""
  );

  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const [isResultsVisible, setIsResultsVisible] = useState(true);

  useEffect(() => {
    const handleMousedown = (e: MouseEvent) => {
      if (formRef.current?.contains(e.target as Node)) {
        setIsResultsVisible(true);
      } else {
        setIsResultsVisible(false);
      }
    };

    const handleFocusin = (e: FocusEvent) => {
      if (formRef.current?.contains(e.target as Node)) {
        setIsResultsVisible(true);
      } else {
        setIsResultsVisible(false);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        e.preventDefault();
        setIsResultsVisible(false);
      }
    };

    document.body.addEventListener("mousedown", handleMousedown);
    document.body.addEventListener("focusin", handleFocusin);
    document.body.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.removeEventListener("mousedown", handleMousedown);
      document.body.removeEventListener("focusin", handleFocusin);
      document.body.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    setIsResultsVisible(false);
  }, [location]);

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsResultsVisible(true);
    setSearchInputValue(e.target.value);
  };

  return (
    <form
      className={classes["search-form"]}
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
    >
      <input
        className={classes["search-input"]}
        type="search"
        name="search"
        placeholder="Search games..."
        value={searchInputValue}
        onChange={handleChangeSearchInput}
      />
      {searchQuery && (
        <SearchResults query={searchQuery} isVisible={isResultsVisible} />
      )}
    </form>
  );
};

export default SearchForm;
