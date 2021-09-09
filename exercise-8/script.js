const hours = document.querySelector("#monthhours");
const bill = document.querySelector("#monthpay");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");

function toNum(value) {
  value = Number(value);
  return value;
}

function threeRule(hours, bill) {
  return Math.round(bill / hours).toFixed(2);
}

btn.addEventListener("click", () => {
  let monthHours = toNum(hours.value);
  let monthBill = toNum(bill.value);
  let hourValue = threeRule(monthHours, monthBill);

  if (hourValue > 10) {
    result.innerHTML = `caraca R$${hourValue} por hora, tá ganhando milhão`;
  } else {
    result.innerHTML = `dureza vamos trabalhar nisso aí, R$${hourValue} por hora, tá pouco`;
  }
});
