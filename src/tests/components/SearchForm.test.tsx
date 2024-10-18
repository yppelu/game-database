import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import SearchForm from "@/components/SearchForm/SearchForm";

describe("SearchForm", () => {
  beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("should render SearchResults component only when search query is provided", async () => {
    const user = userEvent.setup();
    render(<SearchForm />);

    const form = screen.getByTestId<HTMLFormElement>("search-form");
    const searchInput = screen.getByRole<HTMLInputElement>("searchbox");

    await user.click(searchInput);
    await user.keyboard("Aa");
    expect(form.children.length).toBe(1);

    act(() => vi.advanceTimersByTime(2000));
    expect(form.children.length).toBe(2);

    await user.keyboard("[Backspace][Backspace]");
    expect(form.children.length).toBe(1);
  });
});
