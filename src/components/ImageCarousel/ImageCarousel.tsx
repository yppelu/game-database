import styles from "@/components/ImageCarousel/ImageCarousel.module.scss";
import useFetchScreenshots from "@/hooks/useFetchScreenshots";
import ImageCarouselSkeleton from "./ImageCarousel.skeleton";

const ImageCarousel = ({ id }: { id: number }) => {
  const { isError, isLoading, screenshots } = useFetchScreenshots(id);

  if (isError) return <></>;
  if (isLoading) return <ImageCarouselSkeleton />;

  return (
    <section className={styles.carousel}>
      <ul className={styles["screenshots-list"]}>
        {screenshots.map((screenshot, index) => (
          <li key={screenshot} className={styles["screenshots-list-item"]}>
            <img
              className={styles.screenshot}
              src={screenshot}
              alt={`Game screenshot ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageCarousel;
