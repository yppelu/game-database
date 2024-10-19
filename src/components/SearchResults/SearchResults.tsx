import classes from "@/components/SearchResults/SearchResults.module.scss";

interface SearchResultsProps {
  query: string;
}

function SearchResults({ query }: SearchResultsProps) {
  return (
    <div className={classes["search-results"]}>
      The search query is: {query}
    </div>
  );
}

export default SearchResults;
