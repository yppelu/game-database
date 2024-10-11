import { CustomLinkProps } from "@/components/CustomLink/CustomLinkTypes";
import PlainLink from "@/components/CustomLink/PlainLink/PlainLink";
import WhiteLink from "@/components/CustomLink/WhiteLink/WhiteLink";

function CustomLink(props: CustomLinkProps) {
  switch (props.linkType) {
    case "plain-link":
      return <PlainLink {...props} />;
    case "white-link":
      return <WhiteLink {...props} />;
  }
}

export default CustomLink;
