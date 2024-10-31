/* API Response Data */
interface APIResponseListOfGamesResult {
  id: number;
  name: string;
  background_image?: string;
  parent_platforms?: { platform: Platform }[];
}

export interface APIResponseListOfGames {
  count: number;
  results: APIResponseListOfGamesResult[];
}

export interface APIResponseGameDetails {
  id: number;
  name: string;
  description_raw: string;
  background_image: string | null;
  platforms?: { platform: Platform }[];
  genres: { name: string }[];
  developers: { name: string }[];
  publishers: { name: string }[];
  released: string;
  metacritic: number | null;
}

export interface APIResponseScreenshots {
  count: number;
  results: { image: string }[];
}

/* assembleFetchURL */

interface DatesParams {
  startDate: string;
  endDate?: string;
}

interface OrderingParams {
  type:
    | "added"
    | "created"
    | "metacritic"
    | "name"
    | "rating"
    | "released"
    | "updated";
  reversed: boolean;
}

interface PageParams {
  number: number;
  size: number;
}

interface FetchRequestParams {
  search?: string;
  dates?: DatesParams;
  ordering?: OrderingParams;
  page?: PageParams;
}

interface assembleFetchURLGameOrScreenshotProps {
  type: "game" | "screenshots";
  id: number;
  options?: never;
}

interface assembleFetchURLGamesProps {
  type: "games";
  id?: never;
  options: FetchRequestParams;
}

export type assembleFetchURLType = (
  props: assembleFetchURLGameOrScreenshotProps | assembleFetchURLGamesProps
) => string;

/* Errors */

export type ErrorMessage = "Found nothing" | "Internal error";

/* Game Preview Card */

export interface GamePreviewCardProps {
  type: "search" | "page";
  game: GamePreviewData;
}

/* getPlatformsWithUniqueLogos */

export type GetPlatformsWithUniqueLogos = (platforms: Platform[]) => Platform[];

/* Links */

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

interface LinkImageParams {
  src: string;
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

/* SearchResults  */

export interface SearchResultsProps {
  isVisible: boolean;
  query: string;
}

/* useDebounceValue */

export type UseDebounceValueType = <T>(
  value: T,
  delay: number,
  skipTimeout?: boolean
) => T;

/* useFetchGames */

export interface Platform {
  id: number;
  name: string;
}

export interface PlatformSrcs {
  [index: string]: string;
}

export interface GamePreviewData {
  id: number;
  name: string;
  backgroundImage: string;
  platforms: Platform[];
}

export type UseFetchGamesType = (props?: FetchRequestParams) => {
  error: ErrorMessage | null;
  isLoading: boolean;
  games: GamePreviewData[];
};

/* useFetchGame */

export interface GameData {
  name: string;
  description: string;
  backgroundImage?: string;
  platforms?: Platform[];
  genres: string[];
  developers: string[];
  publishers: string[] | never[];
  released: string;
  metacritic?: number;
}

export type UseFetchGameType = (id: number) => {
  error: ErrorMessage | null;
  isLoading: boolean;
  game: GameData | null;
};

/* useFetchScreenshots */

export type UseFetchScreenshotsType = (id: number) => {
  isError: boolean;
  isLoading: boolean;
  screenshots: string[];
};
