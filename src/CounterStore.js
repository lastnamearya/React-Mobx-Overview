import { extendObservable, action } from 'mobx';

const CounterStore = extendObservable(this, {
  count: 0,
  increment: action(() => {
    this.count += 1;
  }),
  decrement: action(() => {
    this.count -= 1;
  })
});

export default CounterStore;