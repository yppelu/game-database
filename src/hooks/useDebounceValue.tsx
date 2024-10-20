import { useEffect, useState } from "react";
import { UseDebounceValueType } from "@/types";

const useDebounceValue: UseDebounceValueType = (value, delay, skipTimeout) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

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
};

export default useDebounceValue;
