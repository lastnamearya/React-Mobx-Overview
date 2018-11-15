import { extendObservable, action } from "mobx";

const CalculationStore = extendObservable(this, {
  valueOne: "",
  valueTwo: "",
  valueThree: "",
  valueFour: "",

  get multiplication() {
    return this.valueOne * this.valueTwo;
  },

  setValueOne(valueOne) {
    this.valueOne = valueOne;
  },
  setValueTwo(valueTwo) {
    this.valueTwo = valueTwo;
  },

  get addition() {
    return this.valueThree + this.valueFour;
  },

  firstValue: action(valueThree => {
    this.valueThree = valueThree;
  }),
  secondValue: action(valueFour => {
    this.valueFour = valueFour;
  })
});

export default CalculationStore;
