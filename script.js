let expression = "";

function insert(char) {
  expression += char;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("result").value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("result").value = result;
    expression = result.toString();
  } catch (error) {
    alert("Invalid expression!");
    clearScreen();
  }
}
