// Wait for everything to load before the code runs

document.addEventListener('DOMContentLoaded', () => {

  // Setting up intial calculator object
  const calc = {};

  // Setting up my 'variables' (AKA properties to be used in calculations)
  calc.num1 = null;
  calc.num2 = null;
  calc.continue = true;
  calc.nextCalc = true;
  calc.operator = '';

  // Initial prompt
  calc.alert1 = () => {
    alert('Welcome to the calculator!');
  };

  calc.pick = () => {
    calc.type = prompt('What calculator would you like to use - (a)dvanced or (b)asic?');
  };

  calc.prompt1 = () => {
    calc.operator = prompt('Would you like to (a)dd, (s)ubtract, (m)ultiply or (d)ivide?');
  };

  calc.prompt2 = () => {
    calc.operator = prompt('Would you like to s(q)uare root or use (p)ower?')
  };

  calc.squareRoot = () => {
    calc.num1 = prompt('What number do you want to square root?');
    calc.num1 = Number(calc.num1);
  };

  calc.power = () => {
    calc.num1 = prompt('What number do you want to apply the power to?');
    calc.num1 = Number(calc.num1);
    calc.num2 = prompt('What number do you want the power to be?');
    calc.num2 = Number(calc.num2);
  }

  calc.getNum1 = () => {
    calc.num1 = prompt('What is your first number?');
    calc.num1 = Number(calc.num1);
  };

  calc.getNum2 = () => {
    calc.num2 = prompt('What is your second number?');
    calc.num2 = Number(calc.num2);
  };


  // I want to be able to get the result whenever I want, so I can wrap my switch statement inside a method that takes in the num1, num2 and operator arguments.


  calc.getResult = (num1, num2, operator) => {
    switch (operator) {
      case "a":
      calc.currentResult = num1 + num2;
      alert(`${num1} + ${num2} = ${calc.currentResult}.`);
      break;
      case "s":
      calc.currentResult = num1 - num2;
      alert(`${num1} - ${num2} = ${calc.currentResult}.`);
      break;
      case "m":
      calc.currentResult = num1 * num2;
      alert(`${num1} x ${num2} = ${calc.currentResult}.`);
      break;
      case "d":
      calc.currentResult = num1 / num2;
      alert(`${num1} ÷ ${num2} = ${calc.currentResult}.`);
      break;
      case "q":
      calc.currentResult = Math.sqrt(num1);
      alert(`The square root of ${num1} is ${calc.currentResult}.`);
      break;
      case "p":
      calc.currentResult = Math.pow(num1, num2);
      alert(`${num1} to the power of ${num2} is ${calc.currentResult}.`);
      break;
      default:
      alert('you picked nothing!');
    }
  }

  calc.continuePrompt = () => {
    calc.continueWord = prompt('Would you like to continue? (y/n)');
  }

  calc.nextCalculation = () => {
    calc.nextCalculationWord = prompt('Would you like to continue with another calculation? (y/n)');
  }

  while (calc.continue)  {
    calc.alert1();
    calc.pick();

    switch (calc.type) {
      case 'b':
        calc.prompt1();
        calc.getNum1();
        calc.getNum2();
        calc.getResult(calc.num1, calc.num2, calc.operator);
        calc.nextCalculation();
        while (calc.nextCalc === true) {
          if (calc.nextCalculationWord === 'y') {
            calc.num1 = calc.currentResult;
            calc.getNum2();
            calc.getResult(calc.num1, calc.num2, calc.operator);
            calc.nextCalculation();
          } else if (calc.nextCalculationWord === 'n'){
            calc.nextCalc = false;
            calc.continuePrompt();
            (calc.continueWord === 'y') ? calc.continue = true : calc.continue = false;
          }
        }
        break;
      case 'a':
        calc.prompt2();
        if (calc.operator === 'q') {
          calc.squareRoot();
          calc.getResult(calc.num1, '', calc.operator);
        } else if (calc.operator === 'p') {
          calc.power();
          calc.getResult(calc.num1, calc.num2, calc.operator);
        }
        calc.continuePrompt();
        (calc.continueWord === 'y') ? calc.continue = true : calc.continue = false;
        break;
        default:
    }
  }

  console.log(calc);

}); // Closing document.addEventListener()
