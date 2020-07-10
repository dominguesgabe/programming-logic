const value1 = document.querySelector(".number1");
const value2 = document.querySelector(".number2");
const btn = document.querySelector("#btn");
const returnDiv = document.querySelector(".return");

function parseNumber(value) {
  if (value == "") {
    value = 0;
  } else {
    value = parseFloat(value);
  }
  return value;
}

function sum(x, y) {
  return x + y;
}

btn.addEventListener("click", () => {
  var num1 = parseNumber(value1.value);
  var num2 = parseNumber(value2.value);

  var sumResult = sum(num1, num2);

  returnDiv.textContent = `your sum result is ${sumResult}`;
});
