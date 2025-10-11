// Exercise 1
const add = (a, b) => a + b;

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    const result = add(2, 3);
    console.log(result); // 5
});

// Exercise 2
const randomNumber = () => Math.floor(Math.random() * 101);

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    const number = randomNumber();
    console.log(number); // Random number between 0 and 100
});