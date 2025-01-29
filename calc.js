
const display = document.getElementById('display');

// Update the display when a button is clicked
function updateDisplay(value) {
    display.textContent += value;
}

// Clear the display
function clearDisplay() {
    display.textContent = '';
}

// Calculate the result
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error'; // Show error for invalid input
    }
}

