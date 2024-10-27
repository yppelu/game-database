import { paths } from "@/helpers/consts";
import styles from "@/pages/ErrorPage/ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  document.title = "Page not Found | Game Database";

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.description}>
          Whoops!
          <br />
          We couldn&apos;t find that page.
        </p>
        <Link className={styles.link} to={paths.home}>
          Home page
        </Link>
      </main>
      <div className={styles["background-image"]}></div>
    </>
  );
};

export default ErrorPage;
