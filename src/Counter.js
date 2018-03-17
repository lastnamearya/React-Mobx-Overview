import React from 'react';
import { observer } from 'mobx-react';

const Counter = ({ store }) => (
  <div>
    <h1>React Mobx | Basic Example | Counter</h1>
    <h3>
      {store.count}
    </h3>
    <button onClick={store.increment}>Increment</button>
    <button onClick={store.decrement}>Decrement</button>
  </div>
);

export default observer(Counter);