import { act, renderHook } from "@testing-library/react";
import useDebounceValue from "@/hooks/useDebounceValue";

describe("useDebounceValue", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("should not return anything while timer is not run", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounceValue(value, 1000),
      { initialProps: { value: 1 } }
    );

    act(() => rerender({ value: 2 }));
    act(() => vi.advanceTimersByTime(500));

    expect(result.current).toEqual(1);
  });

  it("should return only the last value provided within a delay", () => {
    const delay = 1000;

    const { result, rerender } = renderHook(
      ({ value }) => useDebounceValue(value, delay),
      { initialProps: { value: 1 } }
    );

    act(() => rerender({ value: 2 }));
    act(() => vi.advanceTimersByTime(delay - 100));
    act(() => rerender({ value: 3 }));
    act(() => vi.advanceTimersByTime(delay));

    expect(result.current).toEqual(3);
  });

  it("should return the same value immediately when skipTimeout is true", () => {
    const { result, rerender } = renderHook(
      ({ value, skipTimeout }) => useDebounceValue(value, 1000, skipTimeout),
      { initialProps: { value: 1, skipTimeout: false } }
    );

    act(() => rerender({ value: 2, skipTimeout: false }));
    act(() => rerender({ value: 3, skipTimeout: true }));
    act(() => vi.runAllTimers());

    expect(result.current).toEqual(3);
  });
});
