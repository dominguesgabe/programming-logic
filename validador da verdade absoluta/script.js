const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let luck = Math.round(Math.random() * 100);

  if (luck <= 50) {
    return (result.innerHTML = `Não`);
  } else {
    return (result.innerHTML = `Sim`);
  }
});
