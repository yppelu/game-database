import classes from "@/components/CustomLink/WhiteLink/WhiteLink.module.scss";
import { WhiteLinkProps } from "../CustomLinkTypes";

function WhiteLink({ href, isForeign, img, text }: WhiteLinkProps) {
  return (
    <a
      className={classes.link}
      href={href}
      target={isForeign ? "_blank" : undefined}
      rel={isForeign ? "noopener noreferrer" : undefined}
    >
      {img && (
        <img
          className={classes["link-icon"]}
          src={img.src}
          alt={img.alt}
          aria-hidden={Boolean(text)}
        />
      )}
      {text}
    </a>
  );
}

export default WhiteLink;
