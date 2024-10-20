import classes from "@/components/SearchResults/SearchResults.module.scss";
import { SearchResultsProps } from "@/types";

const SearchResults = ({ query }: SearchResultsProps) => {
  return (
    <div className={classes["search-results"]}>
      The search query is: {query}
    </div>
  );
};

export default SearchResults;
