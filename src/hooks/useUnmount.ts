import { useEffect, useRef } from 'react';

const useUnmount = (callback: () => void) => {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => () => callbackRef.current(), []);
};

export default useUnmount;
