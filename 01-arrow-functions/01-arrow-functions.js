// Exercise 1
const add = (a, b) => a + b;

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    const result = add(2, 3);
    console.log(result); // 5
});