import classes from "@/components/SearchResults/SearchResults.module.scss";

function SearchResults(props: { query: string }) {
  return (
    <div className={classes["search-results"]}>
      The search query is: {props.query}
    </div>
  );
}

export default SearchResults;
