// Exercise 1
const canDrive = (age) => age >= 18 ? 'You can drive' : 'You cannot drive';

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    const result = canDrive(20);
    console.log(result);
});

// Exercise 2
const compareNumbers = (num1, num2) => num1 > num2 ? 'num1 is greater' : 'num2 is greater';

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    const result = compareNumbers(10, 5);
    console.log(result);
});

// Exercise 3.1
const classifyNumber = (number) => 
    number > 0 ? 'Positive' : 
    number < 0 ? 'Negative' : 'Zero';

// HTML part to test
const exercise3_1Test = document.getElementById('run-exercise-3-1-btn');
exercise3_1Test.addEventListener('click', () => {

    const result = classifyNumber(5);
    console.log(result);
});

// Exercise 3.2
const findMaximum = (a, b, c) => 
    a >= b && a >= c ? a : 
    b >= c ? b : c;

// HTML part to test
const exercise3_2Test = document.getElementById('run-exercise-3-2-btn');
exercise3_2Test.addEventListener('click', () => {
    
    const result = findMaximum(10, 5, 8);
    console.log(result);
});

// Exercise 4
const evenOrOdd = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const result = numbers[i] % 2 === 0 ? 'Even' : 'Odd';
        console.log(`${numbers[i]} is ${result}`);
    }
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    const numbers = [1, 2, 3, 4, 5, 6];
    evenOrOdd(numbers);
});