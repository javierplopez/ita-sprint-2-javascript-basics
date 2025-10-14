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

// Exercise 3
class Person {
    constructor(name) {
        this.name = name;
    }
    
    // Arrow function that preserves 'this' context
    greet = () => {
        console.log(`Hello, ${this.name}`);
    }
}

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    const person = new Person('Alice');
    person.greet(); // Hello, Alice
});

// Exercise 4
const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const printNumber = () => console.log(numbers[i]);
        printNumber();
    }
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    const numbersArray = [1, 2, 3, 4, 5];
    printNumbers(numbersArray); // 1, 2, 3, 4, 5 (each on new line)
});

// Exercise 5
const delayedMessage = () => {
    setTimeout(() => {
        console.log('Message after 3 seconds!');
    }, 3000);
};

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    console.log('Executing delayed function... Wait 3 seconds');
    delayedMessage(); // Waits 3 seconds, then prints: Message after 3 seconds!
});