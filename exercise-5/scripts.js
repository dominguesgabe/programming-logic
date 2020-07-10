const meter = document.querySelector("#number");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");

function parseMeter(num) {
  num = parseFloat(num);
  return num;
}

function toCentimeter(M) {
  return M * 100;
}

btn.addEventListener("click", () => {
  let meterNum = parseMeter(meter.value);

  let inCentimeter = toCentimeter(meterNum);

  result.textContent = `this quantity of meter in centimeters is ${inCentimeter} cm.`;
});
