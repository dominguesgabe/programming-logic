const input = document.querySelector("#ray");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

function parseValue(unprocessed) {
  unprocessed = Number(unprocessed);
  return unprocessed;
}

function areaCalc(radius) {
  return 2 * Math.PI * radius;
}

btn.addEventListener("click", () => {
  let processed = parseValue(input.value);
  let area = areaCalc(processed);

  result.innerHTML = `your radius area is ${area}².`;
});
