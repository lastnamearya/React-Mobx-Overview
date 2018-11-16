import React, { Component } from "react";

import Counter from "./Counter";
import CounterStore from "./CounterStore";

import Calculation from "./Calculation";
import CalculationStore from "./CalculationStore";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter store={CounterStore} />
        <Calculation store={CalculationStore} />
      </React.Fragment>
    );
  }
}

export default App;
