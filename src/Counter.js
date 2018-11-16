import React from "react";
import { observer } from "mobx-react";

const Counter = ({ store }) => {
  return (
    <div>
      <h2>{store.count}</h2>
      <button onClick={store.addCount}>Increment</button>
      <button onClick={store.subtractCount}>Decrement</button>
    </div>
  );
};

export default observer(Counter);
