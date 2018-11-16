import { extendObservable, action } from "mobx";

const CalculationStore = extendObservable(this, {
  firstInput: "",
  secondInput: "",

  get multipication() {
    return this.firstInput * this.secondInput;
  },

  addOne: action(value => {
    this.firstInput = value;
    console.log(this.firstInput);
  }),

  addSecond: action(value => {
    this.secondInput = value;
    console.log(this.secondInput);
  })
});

export default CalculationStore;
