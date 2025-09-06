
const result = document.getElementById("result");

function append(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let input = result.value.replace(/\s/g, ""); // quitamos espacios

    // Easter eggs
    if (input === "5+5") {
      result.value = "tu mai";
      return;
    } 
    if (input === "10+10") {
      result.value = "buen sucio😒";
      return;
    } 
    if (input === "2+2") {
      result.value = "estupiro";
      return;
    }

    // Calculamos normalmente
    let res = eval(result.value);

    // Si el resultado es 100, mostramos emoji
    if (res === 100) {
      result.value = "💯👌";
    } else {
      result.value = res;
    }
  } catch {
    result.value = "Error";
  }
}
if (imput === "2+3)