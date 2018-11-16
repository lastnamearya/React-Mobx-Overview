import React from "react";
import { observer } from "mobx-react";

const Calculation = ({ store }) => {
  return (
    <div>
      <h2>Multiplication with Mobx | Reactive Way</h2>
      <input
        name="firstInput"
        type="number"
        onChange={event => store.addOne(event.target.value)}
      />
      <input
        name="secondInput"
        type="number"
        onChange={event => store.addSecond(event.target.value)}
      />
      <h3>{store.multipication}</h3>

      <h2>Additon Example with Mobx | Reactive Way</h2>
      <input
        type="number"
        name="thirdInput"
        onChange={event => store.addThird(event.target.value)}
      />
      <input
        type="number"
        name="fourthInput"
        onChange={event => store.addFourth(event.target.value)}
      />
      <h3>{store.addition}</h3>
    </div>
  );
};

export default observer(Calculation);
