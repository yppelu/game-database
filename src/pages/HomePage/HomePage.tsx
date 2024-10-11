import classes from "@/pages/HomePage/HomePage.module.scss";

function HomePage() {
  return (
    <>
      <main></main>
      <video
        className={classes["background-video"]}
        autoPlay
        muted
        loop
        aria-hidden="true"
      >
        <source src="/videos/pyke.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default HomePage;
