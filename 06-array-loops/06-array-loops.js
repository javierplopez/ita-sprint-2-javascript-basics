// Exercise 1
const names = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    names.forEach(name => console.log(name));
});

// Exercise 2
const namesLoop = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    for (const name of namesLoop) {
        console.log(name);
    }
});

// Exercise 3
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Original array:', numbers);
    console.log('Even numbers:', evens);
});

// Exercise 4
const person = { name: 'Ola', age: 25, city: 'Barcelona' };

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    for (const key in person) {
        console.log(key + ': ' + person[key]);
    }
});

// Exercise 5
const numbersBreak = [1, 2, 3, 4, 5, 6];

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    for (const num of numbersBreak) {
        if (num === 5) {
            break;
        }
        console.log(num);
    }
});

// Exercise 6
const namesIndex = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    for (const [index, name] of namesIndex.entries()) {
        console.log(index + ': ' + name);
    }
});