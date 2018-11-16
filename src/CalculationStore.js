import { extendObservable, action } from "mobx";

const CalculationStore = extendObservable(this, {
  firstInput: "",
  secondInput: "",
  thirdInput: "",
  fourthInput: "",

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
  }),

  get addition() {
    return Number(this.thirdInput) + Number(this.fourthInput);
  },

  addThird: action(value => {
    this.thirdInput = value;
    console.log(this.thirdInput);
  }),

  addFourth: action(value => {
    this.fourthInput = value;
    console.log(this.fourthInput);
  })
});

export default CalculationStore;
