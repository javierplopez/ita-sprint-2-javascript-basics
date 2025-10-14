// Exercise 1
const numbers = [1, 2, 3, 4];
// Using map to create array with squares
const squares = numbers.map(num => num * num);

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('Original array:', numbers);
    console.log('Squares array:', squares);
});

// Exercise 2
// Using filter to get only even numbers
const evens = numbers.filter(num => num % 2 === 0);

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    console.log('Original array:', numbers);
    console.log('Even numbers:', evens);
});

// Exercise 3
const findNumbers = [1, 10, 8, 11];
// Using find to get the first number greater than 10
const greaterThan10 = findNumbers.find(num => num > 10);

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Original array:', findNumbers);
    console.log('First number greater than 10:', greaterThan10);
});

// Exercise 4
const reduceNumbers = [13, 7, 8, 21];
// Using reduce to calculate the total sum
const totalSum = reduceNumbers.reduce((accumulator, num) => accumulator + num, 0);

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    console.log('Original array:', reduceNumbers);
    console.log('Total sum:', totalSum);
});

// Exercise 5
const combinedNumbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
// One-line function: filter + map + reduce
const result = combinedNumbers.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    console.log('Original array:', combinedNumbers);
    console.log('Result:', result);
});

// Exercise 6
const everyNumbers = [11, 12, 13, 14];
// Using every to check if all elements meet the condition
const allGreaterThan10 = everyNumbers.every(num => num > 10);
// Using some to check if at least one meets the condition
const someGreaterThan10 = everyNumbers.some(num => num > 10);

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    console.log('Original array:', everyNumbers);
    console.log('All greater than 10:', allGreaterThan10);
    console.log('Some greater than 10:', someGreaterThan10);
});