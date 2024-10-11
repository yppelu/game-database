interface LinkImageParams {
  src: string;
  alt: string;
}

interface LinkBaseProps {
  href: string;
  isForeign: boolean;
}

interface PlainLinkProps extends LinkBaseProps {
  linkType: "plain-link";
  text: string;
}

interface WhiteLinkBaseProps extends LinkBaseProps {
  linkType: "white-link";
}

interface WhiteLinkWithImageProps extends WhiteLinkBaseProps {
  img: LinkImageParams;
  text?: string;
}

interface WhiteLinkWithoutImageProps extends WhiteLinkBaseProps {
  img?: never;
  text: string;
}

type WhiteLinkProps = WhiteLinkWithImageProps | WhiteLinkWithoutImageProps;
type CustomLinkProps = PlainLinkProps | WhiteLinkProps;

export type { CustomLinkProps, PlainLinkProps, WhiteLinkProps };
