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
    if (b === 0) {
        return "NOPE!"
    } else {
    return a / b;
    }
}

//Display Value and Operate function
function operate(operator, a, b) {
    const displayVal = function(value) {
    let display = document.getElementById("display");
    display.innerText = value;
    }

    if (operator === "+" ){
      value = add(a, b);
        } else if (operator === "-" ) {
      value = subtract(a, b);     
            } else if (operator === "*" ) {
          value = multiply(a, b);
            } else {
          value = divide(a, b);
      }
    displayVal(value);
}

//Store user input a
function storeVar(el) {
    let a = el.value;
    return a;
}

//Return output once = is clicked
//document.getElementById("equals").addEventListener("click", operate);
