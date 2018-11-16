import React from "react";
import { observer } from "mobx-react";

const Counter = ({ store }) => {
  return <h2>{store.count}</h2>;
};

export default observer(Counter);
