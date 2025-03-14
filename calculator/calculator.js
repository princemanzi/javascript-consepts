// Function to perform the selected arithmetic operation
function calculate(a, b, operator) {
    if (operator === 'add') return a + b;
    if (operator === 'subtract') return a - b;
    if (operator === 'multiply') return a * b;
    if (operator === 'divide') {
      if (b === 0) return 'Error: Division by zero';
      return a / b;
    }
    return 'Invalid operator';
  }
  
  // Ensure the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateBtn').addEventListener('click', () => {
      // Get input values
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operation').value;
      console.log('Button clicked');
      
      // Debugging: Log values to the console
      console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
      
      // Validate input
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
      }
      
      // Perform calculation and display result
      const result = calculate(num1, num2, operator);
      document.getElementById('result').textContent = `Result: ${result}`;
    });
  });
  