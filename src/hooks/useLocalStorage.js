import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = window.localStorage.getItem(key);
    } catch (e) {
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
