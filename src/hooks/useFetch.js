import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [res, setRes] = useState(null);

  // Private fetchData method
  async function fetchData() {
    try {
      const res = await fetch(url, options);
      const fetchedData = await res.json();
      setRes(fetchedData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return res;
};

export default useFetch;
