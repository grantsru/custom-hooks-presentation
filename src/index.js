import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import { baseUrl, options } from "./config";

function App() {
  const inputEl = useRef(null);
  const [url, setUrl] = useState("");
  const [lastWord, setLastWord] = useLocalStorage("word-app:last", null);

  const data = useFetch(url, options);

  return (
    <div>
      <h3>Word Search</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUrl(baseUrl + inputEl.current.value);
          setLastWord(inputEl.current.value);
        }}
      >
        Input word to search:
        <br />
        <input type="text" ref={inputEl} />
        <input type="submit" />
        <span style={{ padding: "0 10px" }}>
          Last word searched: {lastWord}
        </span>
      </form>
      <br />
      <div
        style={{
          backgroundColor: "#DDD",
          border: "1px solid #333",
          padding: "20px"
        }}
      >
        {!data ? "Search for a word." : JSON.stringify(data)}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
