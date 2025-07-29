const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value) {
      if (resultDisplayed && !isOperator(value)) {
        currentInput = '';
        resultDisplayed = false;
      }

      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
});

document.getElementById('equal').addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
    resultDisplayed = true;
  } catch (error) {
    display.textContent = 'Error';
    currentInput = '';
  }
});

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
