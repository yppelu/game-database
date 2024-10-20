import classes from "@/pages/ErrorPage/ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  document.title = "404 | Game Database";

  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.heading}>404</h1>
        <p className={classes.description}>
          Whoops!
          <br />
          We couldn&apos;t find that page.
        </p>
        <Link className={classes.link} to="/">
          Home page
        </Link>
      </main>
      <div className={classes["background-image"]}></div>
    </>
  );
};

export default ErrorPage;
