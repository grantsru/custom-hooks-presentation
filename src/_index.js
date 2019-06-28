import React from "react";
import ReactDOM from "react-dom";
import { baseUrl, options } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: null
    };

    this.fetchData = this.fetchData.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  async fetchData(e) {
    e.preventDefault();
    try {
      const res = await fetch(baseUrl + this.state.value, options);
      const fetchedData = await res.json();
      this.setState({ value: "", data: fetchedData });
    } catch (e) {
      console.error(e);
    }
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchData}>
          Input word to search:
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.updateValue}
          />
          <input type="submit" />
        </form>
        <br />
        <div
          style={{
            backgroundColor: "#DDD",
            border: "1px solid #333",
            padding: "20px"
          }}
        >
          {JSON.stringify(this.state.data)}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
