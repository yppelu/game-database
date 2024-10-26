import styles from "@/components/CustomLink/WhiteLink/WhiteLink.module.scss";
import { WhiteLinkProps } from "@/types";

const WhiteLink = ({ href, isForeign, img, text }: WhiteLinkProps) => {
  return (
    <a
      className={styles.link}
      href={href}
      target={isForeign ? "_blank" : undefined}
      rel={isForeign ? "noopener noreferrer" : undefined}
    >
      {img && <img className={styles["link-icon"]} src={img.src} alt="" />}
      {text}
    </a>
  );
};

export default WhiteLink;
