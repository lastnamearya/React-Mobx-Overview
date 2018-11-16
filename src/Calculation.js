import React from "react";
import { observer } from "mobx-react";

const Calculation = ({ store }) => {
  return (
    <div>
      <h2>Multiplication with Mobx | Reactive Way</h2>
      <input
        name="valueOne"
        type="number"
        onChange={event => store.addOne(event.target.value)}
      />
      <input
        name="valueOne"
        type="number"
        onChange={event => store.addSecond(event.target.value)}
      />
      <h3>{store.multipication}</h3>
    </div>
  );
};

export default observer(Calculation);
