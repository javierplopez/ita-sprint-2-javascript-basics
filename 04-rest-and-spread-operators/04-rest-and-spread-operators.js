// Exercise 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Using spread operator to combine arrays
const array3 = [...array1, ...array2];

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('Array 1:', array1);
    console.log('Array 2:', array2);
    console.log('Array 3 (combined):', array3);
});

// Exercise 2
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    console.log(sum(1, 2, 3));
    console.log(sum(10, 20, 30, 40));
});

// Exercise 3
const object1 = {
    name: 'Ana',
    age: 25,
    city: 'Madrid'
};

// Copying object with spread
const object2 = { ...object1 };

// Modifying object2
object2.age = 30;
object2.profession = 'Developer';

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Object 1:', object1);
    console.log('Object 2:', object2);
    console.log('Are they the same object?', object1 === object2);
});

// Exercise 4
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

// Destructuring with rest operator
const [first, second, ...rest] = colors;

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    console.log('First element:', first);
    console.log('Second element:', second);
    console.log('Rest of elements:', rest);
});

// Exercise 5
const greet = (name, surname, age) => {
    return `Hello, ${name} ${surname}. You are ${age} years old.`;
};

const personData = ['Ana', 'García', 28];

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    console.log('Using spread to pass array elements as function arguments:');
    console.log(greet(...personData));
});

// Exercise 6
const objectA = {
    name: 'Carlos',
    age: 30,
    city: 'Madrid'
};

const objectB = {
    profession: 'Developer',
    email: 'carlos@email.com',
    active: true
};

// Merging objects with spread
const mergedObject = { ...objectA, ...objectB };

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    console.log('Using spread to merge multiple objects:');
    console.log(mergedObject);
});