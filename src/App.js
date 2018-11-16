import React, { Component } from "react";
import Counter from "./Counter";
import CounterStore from "./CounterStore";

class App extends Component {
  render() {
    return <Counter store={CounterStore} />;
  }
}

export default App;
