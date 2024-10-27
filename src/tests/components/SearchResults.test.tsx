import { render, screen } from "@testing-library/react";
import SearchResults from "@/components/SearchResults/SearchResults";
import * as useFetchGamesModule from "@/hooks/useFetchGames";
import { GamePreviewData } from "@/types";

vi.mock("@/components/GamePreviewCard/GamePreviewCard", () => ({
  default: ({ game }: { game: GamePreviewData }) => (
    <div>card with id = {game.id}</div>
  )
}));
vi.mock("@/components/GamePreviewCard/GamePreviewCard.skeleton", () => ({
  default: () => <div>Game Preview Card Skeleton</div>
}));

describe("SearchResults", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should notify a user that nothing is found", () => {
    vi.spyOn(useFetchGamesModule, "default").mockImplementation(() => {
      return { error: "Found nothing", isLoading: false, games: [] };
    });
    render(<SearchResults isVisible={true} query="query" />);

    const errorElements = screen.getAllByText(/nothing.*found|found.*nothing/i);
    expect(errorElements).toHaveLength(2);
  });

  it("should notify a user that internal error has happened", () => {
    vi.spyOn(useFetchGamesModule, "default").mockImplementation(() => {
      return { error: "Internal error", isLoading: false, games: [] };
    });
    render(<SearchResults isVisible={true} query="query" />);

    const errorElements = screen.getAllByText(/internal.*error/i);
    expect(errorElements).toHaveLength(2);
  });

  it("should notify a user that data is loading", () => {
    vi.spyOn(useFetchGamesModule, "default").mockImplementation(() => {
      return { error: null, isLoading: true, games: [] };
    });
    render(<SearchResults isVisible={true} query="query" />);

    const statusElement = screen.getByText(/loading/i);
    expect(statusElement).toBeInTheDocument();

    const GamePreviewCardSkeletonComponents = screen.getAllByText(
      /game preview card skeleton/i
    );
    expect(GamePreviewCardSkeletonComponents).toHaveLength(4);
  });

  it("should notify a user that data is loaded and show it", () => {
    const games: GamePreviewData[] = [
      { id: 1, name: "Game 1", backgroundImage: "src1", platforms: [] },
      { id: 2, name: "Game 2", backgroundImage: "src2", platforms: [] }
    ];
    vi.spyOn(useFetchGamesModule, "default").mockImplementation(() => {
      return { error: null, isLoading: false, games: games };
    });
    render(<SearchResults isVisible={true} query="query" />);

    const statusElement = screen.getByText(/loaded/i);
    expect(statusElement).toBeInTheDocument();

    const GamePreviewCardComponent1 = screen.getByText(/card with id = 1/i);
    expect(GamePreviewCardComponent1).toBeInTheDocument();

    const GamePreviewCardComponent2 = screen.getByText(/card with id = 2/i);
    expect(GamePreviewCardComponent2).toBeInTheDocument();
  });
});
