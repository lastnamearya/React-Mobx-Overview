import { extendObservable, action } from "mobx";

const CounterStore = extendObservable(this, {
  count: 0
});

export default CounterStore;
