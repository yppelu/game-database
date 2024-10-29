import { renderHook, waitFor } from "@testing-library/react";
import { APIResponseGameDetails, GameData } from "@/types";
import useFetchGame from "@/hooks/useFetchGame";

describe("useFetchGame", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should set isLoading to true when request is in process", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      return new Promise(() => {});
    });
    const { result } = renderHook(() => useFetchGame(1));
    expect(result.current.isLoading).toBeTruthy();
  });

  it('should return error message "Internal error"', () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: false } as Response);
    const { result } = renderHook(() => useFetchGame(1));
    waitFor(() => expect(result.current.error).toBe("Internal error"));
  });

  it('should return error message "Found nothing"', () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 404
    } as Response);

    const { result } = renderHook(() => useFetchGame(1));

    waitFor(() => expect(result.current.error).toBe("Found nothing"));
  });

  it("should return game if data is retrieved successfully", () => {
    const mockResponse: APIResponseGameDetails = {
      id: 1,
      name: "Game 1",
      description_raw: "Description of game 1",
      background_image: "url",
      platforms: [
        { platform: { id: 1, name: "PC" } },
        { platform: { id: 2, name: "PlayStation" } }
      ],
      genres: [{ name: "Adventure" }, { name: "RPG" }],
      developers: [{ name: "Developer" }],
      publishers: [{ name: "Publisher 1" }, { name: "Publisher 2" }],
      released: "2020-12-12",
      metacritic: null
    };

    vi.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async (): Promise<APIResponseGameDetails> => mockResponse
    } as Response);

    const { result } = renderHook(() => useFetchGame(1));

    waitFor(() => {
      const mockReturnGames: GameData[] = [
        {
          name: "Game 1",
          description: "Description of game 1",
          backgroundImage: "url",
          platforms: [
            { id: 1, name: "PC" },
            { id: 2, name: "PlayStation" }
          ],
          genres: ["Adventure", "RPG"],
          developers: ["Developer"],
          publishers: ["Publisher 1", "Publisher 2"],
          released: "2020-12-12"
        }
      ];

      expect(result.current.game).toEqual(mockReturnGames);
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBeFalsy();
    });
  });
});
