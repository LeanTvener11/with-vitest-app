'use client';

import { useState, useCallback } from 'react';

interface UseAwsomeReturn {
  state:"nothing Added" | "ok I will add 3";
  clickCounter: number;
  handleClick: () => void;
}

/**
 * A hook that provides a click handler and tracks click count
 * @returns An object containing isPending state, clickCounter, and handleClick function
 */
const useAwsome = (): UseAwsomeReturn => {
  const [state, setState] = useState<"nothing Added" | "ok I will add 3">("nothing Added");
  const [clickCounter, setClickCounter] = useState<number>(0);

  const handleClick = useCallback(() => {
    setState("ok I will add 3");
    // Increase counter by 3
    setClickCounter(prevCount => prevCount + 3);
  }, []);

  return {
    state,
    clickCounter,
    handleClick
  };
};

export default useAwsome;
