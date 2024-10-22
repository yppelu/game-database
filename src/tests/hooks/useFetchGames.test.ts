import { renderHook, waitFor } from "@testing-library/react";
import { APIResponseListOfGames, GamePreviewData } from "@/types";
import useFetchGames from "@/hooks/useFetchGames";

describe("useFetchGames", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should set isLoading to true when request is in process", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      return new Promise(() => {});
    });
    const { result } = renderHook(() => useFetchGames());
    expect(result.current.isLoading).toBeTruthy();
  });

  it('should return error message "Internal error"', () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: false } as Response);
    const { result } = renderHook(() => useFetchGames());
    waitFor(() => expect(result.current.error).toBe("Internal error"));
  });

  it('should return error message "Found nothing"', () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async (): Promise<APIResponseListOfGames> => ({
        count: 0,
        results: []
      })
    } as Response);

    const { result } = renderHook(() => useFetchGames());

    waitFor(() => expect(result.current.error).toBe("Found nothing"));
  });

  it("should return games if data is retrieved successfully", () => {
    const mockResponse: APIResponseListOfGames = {
      count: 1,
      results: [
        {
          id: 1,
          name: "Game 1",
          background_image: "image1.jpg",
          parent_platforms: [{ platform: { id: 1, name: "PC" } }]
        }
      ]
    };

    vi.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async (): Promise<APIResponseListOfGames> => mockResponse
    } as Response);

    const { result } = renderHook(() => useFetchGames());

    waitFor(() => {
      const mockReturnGames: GamePreviewData[] = [
        {
          id: 1,
          name: "Game 1",
          backgroundImage: "image1.jpg",
          platforms: [{ id: 1, name: "PC" }]
        }
      ];

      expect(result.current.games).toEqual(mockReturnGames);
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBeFalsy();
    });
  });
});
