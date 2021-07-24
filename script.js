//Display Screen//
const displayValue = document.getElementById("displayScreen");

//Buttons//
let numBut = document.querySelectorAll(".numBut");
const butDivide = document.getElementById("butDivide");
const butMultiply = document.getElementById("butMultiply");
const butMinus = document.getElementById("butMinus");
const butDot = document.getElementById("butDot");
const butEqual = document.getElementById("butEqual");
const butPlus = document.getElementById("butPlus");
const clr = document.getElementById("clr");
const dlt = document.getElementById("dlt");

// Displaying Value//
if (displayValue.innerText !== Number) {
  displayValue.innerText = 0;
}

numBut.forEach((element) => {
  element.addEventListener("click", () => {
    if (displayValue.innerText == 0 && displayValue.innerText.length == 1) {
      displayValue.innerText = element.innerText;
    } else {
      displayValue.innerText += element.innerText;
    }
  });
});

//Delete-Clear//
clr.addEventListener(
  "click",
  () => ((displayValue.innerText = 0), (firstNumber = 0))
);
dlt.addEventListener("click", () => {
  if (displayValue.innerText.length == 1) {
    displayValue.innerText = 0;
  } else {
    displayValue.innerText = displayValue.innerText.substring(
      0,
      displayValue.innerText.length - 1
    );
  }
});

//Dot//
butDot.addEventListener("click", () => {
  if (displayValue.innerText.includes(".")) {
    console.log("already dotted!");
  } else {
    displayValue.innerText += ".";
  }
});

//Equal Button
butEqual.addEventListener("click", () => {
  switch (operator) {
    case "add":
      displayValue.innerText = add(firstNumber, displayValue.innerText);
      break;
    case "substract":
      displayValue.innerText = substract(firstNumber, displayValue.innerText);
      break;
    case "multiply":
      displayValue.innerText = multiply(firstNumber, displayValue.innerText);
      break;
    case "divide":
      displayValue.innerText = divide(firstNumber, displayValue.innerText);
      break;
  }
});

//Operation
let firstNumber = 0;
let operator = "";

butPlus.addEventListener("click", () => {
  if (displayValue.innerText != 0) {
    firstNumber = displayValue.innerText;
    displayValue.innerText = 0;
    operator = "add";
  }
});

butMinus.addEventListener("click", () => {
  if (displayValue.innerText != 0) {
    firstNumber = displayValue.innerText;
    displayValue.innerText = 0;
    operator = "substract";
  }
});

butMultiply.addEventListener("click", () => {
  if (displayValue.innerText != 0) {
    firstNumber = displayValue.innerText;
    displayValue.innerText = 0;
    operator = "multiply";
  }
});

butDivide.addEventListener("click", () => {
  if (displayValue.innerText != 0) {
    firstNumber = displayValue.innerText;
    displayValue.innerText = 0;
    operator = "divide";
  }
});

function add(x, y) {
  return formatter.format(parseFloat(x) + parseFloat(y));
}
function substract(x, y) {
  return formatter.format(parseFloat(x) - parseFloat(y));
}
function divide(x, y) {
  return formatter.format(parseFloat(x) / parseFloat(y));
}
function multiply(x, y) {
  return formatter.format(parseFloat(x) * parseFloat(y));
}

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});
