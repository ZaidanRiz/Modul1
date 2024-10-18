function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleMode() {
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const body = document.body;

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        calculator.classList.add('bg-white');
        display.classList.add('bg-gray-200', 'text-black');
        calculator.querySelectorAll('button').forEach(button => {
            button.classList.replace('bg-gray-700', 'bg-blue-200');
            button.classList.replace('text-white', 'text-blue-600');
        });
    } else {
        calculator.classList.remove('bg-white');
        display.classList.remove('bg-gray-200', 'text-black');
        display.classList.add('bg-gray-800', 'text-white');
        calculator.querySelectorAll('button').forEach(button => {
            button.classList.replace('bg-blue-200', 'bg-gray-700');
            button.classList.replace('text-blue-600', 'text-white');
        });
    }
}
