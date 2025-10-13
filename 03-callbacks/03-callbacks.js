// Exercise 1
const process = (number, callback) => {
    callback(number);
};

const double = (num) => {
    console.log(`The double of ${num} is ${num * 2}`);
};

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    process(5, double);
});

// Exercise 2
const calculator = (num1, num2, callback) => {
    return callback(num1, num2);
};

const add = (a, b) => {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    return result;
};

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    calculator(5, 3, add);
});

// Exercise 3
const waitAndGreet = (name, callback) => {
    setTimeout(() => {
        callback(name);
    }, 2000);
};

const greetPerson = (name) => {
    console.log(`Hello, ${name}! 2 seconds have passed.`);
};

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    waitAndGreet('Ana', greetPerson);
});

// Exercise 4
const processElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    processElements([1, 2, 3], (num, index) => {
        console.log(`The double of ${num} is ${num * 2}`);
    });
});

// Exercise 5
const processString = (string, callback) => {
    const transformedString = string.toUpperCase();
    callback(transformedString);
};

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    processString('javascript', (string) => {
        console.log(`The string "${string}" has ${string.length} characters`);
    });
});