import { useEffect, useState } from "react";

function useDebounceValue<T>(
  value: T,
  delay: number,
  skipTimeout?: boolean
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (skipTimeout) {
      setDebouncedValue(value);
    } else {
      timeoutId = setTimeout(setDebouncedValue, delay, value);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, skipTimeout, value]);

  return debouncedValue;
}

export default useDebounceValue;
