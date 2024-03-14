import { useEffect, useRef } from "react";

// custom useInterval hook
export function useInterval(callback: () => void, delay: number | null) {
  // ref for function
  const savedCallback = useRef<() => void>(() => {});

  // assign latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  /*setinterval and clearinterval*/
  useEffect(() => {
    function func() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(func, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
