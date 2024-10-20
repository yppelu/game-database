import classes from "@/components/CustomLink/PlainLink/PlainLink.module.scss";
import { PlainLinkProps } from "@/types";

const PlainLink = ({ href, isForeign, text }: PlainLinkProps) => {
  return (
    <a
      className={classes.link}
      href={href}
      target={isForeign ? "_blank" : undefined}
      rel={isForeign ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
};

export default PlainLink;
