const inputScore1 = document.querySelector("#num1");
const inputScore2 = document.querySelector("#num2");
const inputScore3 = document.querySelector("#num3");
const inputScore4 = document.querySelector("#num4");

const btn = document.querySelector(".submit");
const result = document.querySelector(".result");

function parse(numString) {
  if (numString == "") {
    value = 0;
  } else {
    value = parseFloat(numString);
  }
  return value;
}

function average(x, y, z, a) {
  return (x + y + z + a) / 4;
}

btn.addEventListener("click", function () {
  var score1 = parse(inputScore1.value);
  var score2 = parse(inputScore2.value);
  var score3 = parse(inputScore3.value);
  var score4 = parse(inputScore4.value);

  var finalScore = average(score1, score2, score3, score4);

  result.textContent = `your average is ${finalScore}`;
});
