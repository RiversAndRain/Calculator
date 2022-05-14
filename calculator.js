//Create math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
  if (operator === "+" ){
      return add(a, b);
  } else if (operator === "-" ) {
      return subtract(a, b);     
      } else if (operator === "*" ) {
          return multiply(a, b);
      } else {
          return divide(a, b);
      }
}

//Create buttons
/*
function createButtons(num) {
    for(let i = 0; i < (num); i++) {
        let div = document.createElement('div');
        div.classList.add("buttons");
        const container = document.getElementById("buttonContainer");
        document.getElementById("container").appendChild(div);
      }
    }
*/

