class Calculator {
  constructor(subtotalTextElement, currentNumTextElement) {
    this.subtotalTextElement = subtotalTextElement;
    this.currentNumElement = currentNumTextElement;
    this.clearData();
  }

  clearData() {
    this.subtotalValue = "";
    this.currentValue = "0";
    this.operator = null;
    this.calculationsFinished = false;
    this.updateDisplay();
  }

  appendNumber(value) {
    if (this.calculationsFinished) {
      this.currentValue = value;
      this.calculationsFinished = false;
    } else {
      if (value === "." && this.currentValue.includes(".")) return;
      this.currentValue += value;
    }
    if (this.currentValue === ".") this.currentValue = "0.";
    if (
      this.currentValue[0] === "0" &&
      !this.currentValue.includes(".") &&
      this.currentValue.length === 2
    )
      this.currentValue = this.currentValue.slice(1);
  }

  deleteNumber() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    if (isNaN(this.currentValue)) this.currentValue = "0";
    if (this.currentValue.length === 0) this.currentValue = "0";
  }

  handleOperator(operator) {
    if (this.currentValue === "") {
      this.operator = operator;
      this.updateDisplay();
      return;
    }
    if (this.subtotalValue !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.subtotalValue = this.currentValue;
    this.currentValue = "";
  }

  changeSymbol() {
    if (parseFloat(this.currentValue) > 0)
      this.currentValue = `-${this.currentValue}`;
    else this.currentValue = this.currentValue.replace("-", "");
  }

  calculate() {
    let result;
    const subtotalNum = parseFloat(this.subtotalValue);
    const currentNum = parseFloat(this.currentValue);
    if (isNaN(subtotalNum) || isNaN(currentNum)) return;
    switch (this.operator) {
      case "+":
        result = subtotalNum + currentNum;
        break;
      case "−":
        result = subtotalNum - currentNum;
        break;
      case "×":
        result = subtotalNum * currentNum;
        break;
      case "÷":
        result = subtotalNum / currentNum;
        break;
      default:
        return;
    }
    this.currentValue = result.toString();
    this.operator = null;
    this.subtotalValue = "";
  }

  updateDisplay() {
    this.currentNumElement.innerText = this.currentValue;
    if (this.operator !== null && this.subtotalValue !== "") {
      this.subtotalTextElement.innerText = `${parseFloat(this.subtotalValue)} ${
        this.operator
      }`;
    } else {
      this.subtotalTextElement.innerText = "";
    }
  }
}

const subtotalTextElement = document.querySelector("#subtotal");
const currentNumTextElement = document.querySelector("#currentNumber");
const changeSymbolButton = document.querySelector("#change-symbol-button");
const equalsButton = document.querySelector("#equals-button");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");

changeSymbolButton.addEventListener("click", () => {
  calc.changeSymbol();
  calc.updateDisplay();
});
equalsButton.addEventListener("click", () => {
  calc.calculate();
  calc.updateDisplay();
  calc.calculationsFinished = true;
});
clearButton.addEventListener("click", () => {
  calc.clearData();
});
deleteButton.addEventListener("click", () => {
  calc.deleteNumber();
  calc.updateDisplay();
});
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
  });
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.handleOperator(button.dataset.operator);
    calc.updateDisplay();
  });
});

const calc = new Calculator(subtotalTextElement, currentNumTextElement);
