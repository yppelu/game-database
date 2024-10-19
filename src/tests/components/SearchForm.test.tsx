import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "@/components/SearchForm/SearchForm";

vi.mock("@/components/SearchResults/SearchResults", () => ({
  default: () => <div>Search Results</div>
}));

describe("SearchForm", () => {
  beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("should render SearchResults component only when search query is provided", async () => {
    const searchResultsComponent = () => screen.queryByText(/search results/i);
    const user = userEvent.setup();
    render(<SearchForm />);

    await user.click(screen.getByRole("searchbox"));
    await user.keyboard("Aa");
    expect(searchResultsComponent()).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(5000));
    expect(searchResultsComponent()).toBeInTheDocument();

    await user.keyboard("[Backspace][Backspace]");
    expect(searchResultsComponent()).not.toBeInTheDocument();
  });
});
