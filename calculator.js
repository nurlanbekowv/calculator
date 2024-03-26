const display = document.getElementById("display");

const appendToDisplay = function (input) {
  display.value += input;
};

const clearDisplay = function () {
  display.value = "";
};
const calculate = function () {
  try {
    const result = eval(document.getElementById("display").value);
    display.value = result;
  } catch (error) {
    clearDisplay();
  }
};
