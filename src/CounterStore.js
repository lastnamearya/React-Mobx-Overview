import { extendObservable, action } from "mobx";

const CounterStore = extendObservable(this, {
  count: 0,
  addCount: action(() => {
    this.count += 1;
  }),
  subtractCount: action(() => {
    this.count -= 1;
  })
});

export default CounterStore;
