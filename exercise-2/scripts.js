const receivedNum = document.querySelector("#inputed-number");
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

btn.addEventListener("click", () => {
  var numBack = parseNumber(receivedNum.value);

  returnDiv.textContent = `Your input was ${numBack}`;
});
