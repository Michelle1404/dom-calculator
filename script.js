const input = document.getElementById("input");
const buttons = document.querySelector(".buttons");
const operators = document.querySelector(".operators").children;
console.log(operators);

let prev = 0;
let curr = 0;
let op;

buttons.onclick = (e) => {
  console.log(e.target.textContent);

  if (e.target.id === "result") {
    for (const oper of operators) {
      oper.classList.remove("selected");
    }
    prev = curr;
    curr = parseFloat(input.innerText);

    switch (op) {
      case "+":
        input.innerText = prev + curr;
        curr = parseFloat(input.innerText);
        break;
      case "-":
        input.innerText = prev - curr;
        curr = parseFloat(input.innerText);
        break;
      case "×":
        input.innerText = prev * curr;
        curr = parseFloat(input.innerText);
        break;
      case "÷":
        input.innerText = prev / curr;
        curr = parseFloat(input.innerText);
        break;
    }
  } else if (e.target.parentElement.className === "buttons") {
    return;
  } else if (e.target.parentElement.className === "leftPanel") {
    return;
  } else if (e.target.parentElement.className === "calculator") {
  } else if (e.target.id === "clear") {
    input.innerText = "";
  } else {
    if (e.target.parentElement.className === "operators") {
      for (const oper of operators) {
        oper.classList.remove("selected");
      }
      e.target.classList.add("selected");
      curr = !parseFloat(input.innerText) ? 0 : parseFloat(input.innerText);

      op = e.target.textContent;
      input.innerText = "";
    } else {
      if (input.innerText.length > 16) {
        return;
      } else {
        input.innerText += e.target.innerText;
      }
    }
  }
};
