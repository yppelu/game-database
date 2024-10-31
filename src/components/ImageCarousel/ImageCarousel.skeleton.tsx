import styles from "@/components/ImageCarousel/ImageCarousel.module.scss";

const ImageCarouselSkeleton = () => {
  return <div className={styles.carousel + " " + styles.skeleton}></div>;
};

export default ImageCarouselSkeleton;
