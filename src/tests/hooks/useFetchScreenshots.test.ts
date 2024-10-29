import { renderHook, waitFor } from "@testing-library/react";
import { APIResponseScreenshots } from "@/types";
import useFetchScreenshots from "@/hooks/useFetchScreenshots";

describe("useFetchScreenshots", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should set isLoading to true when request is in process", () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      return new Promise(() => {});
    });
    const { result } = renderHook(() => useFetchScreenshots(1));
    expect(result.current.isLoading).toBeTruthy();
  });

  it("should return error if Internal Error", () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: false } as Response);
    const { result } = renderHook(() => useFetchScreenshots(1));
    waitFor(() => expect(result.current.isError).toBeTruthy());
  });

  it("should return error is no screenshots found", () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async (): Promise<APIResponseScreenshots> => ({
        count: 0,
        results: []
      })
    } as Response);

    const { result } = renderHook(() => useFetchScreenshots(1));

    waitFor(() => expect(result.current.isError).toBeTruthy());
  });

  it("should return screenshots if data is retrieved successfully", () => {
    const mockResponse: APIResponseScreenshots = {
      count: 2,
      results: [{ image: "image 1" }, { image: "image 2" }]
    };

    vi.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async (): Promise<APIResponseScreenshots> => mockResponse
    } as Response);

    const { result } = renderHook(() => useFetchScreenshots(1));

    waitFor(() => {
      const mockReturnGames: string[] = ["image 1", "image 2"];

      expect(result.current.screenshots).toEqual(mockReturnGames);
      expect(result.current.isError).toBeFalsy();
      expect(result.current.isLoading).toBeFalsy();
    });
  });
});
