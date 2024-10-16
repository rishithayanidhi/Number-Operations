function getnumber(numberstring) {
  while (true) {
    const number = parseFloat(window.prompt("Enter a number " + numberstring + " :"));
    if (isNaN(number)) {
      console.log("Invalid input!");
    } else {
      return number;
    }
  }
}

const number1 = getnumber("1");
const number2 = getnumber("2");

const operator = window.prompt("Enter a sign (+, -, *, /, %) :");

let result;
let valid = true;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    if (number2 === 0) {
      valid = false;
      console.log("Zero division error!");
    } else {
      result = number1 / number2;
    }
    break;

  case "%":
    result = number1 % number2;
    break;

  default:
    console.log("Invalid sign!");
    valid = false;
    break;
}

if (valid) {
  console.log(`${number1} ${operator} ${number2} = ${result}`);
  console.log("I am so curious, any other operation you want to try!");
}
