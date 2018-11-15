import React, { Component } from "react";
import Counter from "./Counter";
import CounterStore from "./CounterStore";
import Calculation from "./Calculation";
import CalculationStore from "./CalculationStore";

class App extends Component {
  render() {
    return (
      <div>
        <Counter store={CounterStore} />
        <Calculation store={CalculationStore} />
      </div>
    );
  }
}

export default App;
