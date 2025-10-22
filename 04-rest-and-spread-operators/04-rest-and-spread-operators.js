// Exercise 1
const firstNumbers = [1, 2, 3];
const secondNumbers = [4, 5, 6];

const combinedNumbers = [...firstNumbers, ...secondNumbers];

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('First numbers:', firstNumbers);
    console.log('Second numbers:', secondNumbers);
    console.log('Combined numbers:', combinedNumbers);
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
const originalPerson = {
    name: 'Ana',
    age: 25,
    city: 'Madrid'
};

const updatedPerson = { ...originalPerson };

updatedPerson.age = 30;
updatedPerson.profession = 'Developer';

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Original person:', originalPerson);
    console.log('Updated person:', updatedPerson);
    console.log('Are they the same object?', originalPerson === updatedPerson);
});

// Exercise 4
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

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
const basicInfo = {
    name: 'Carlos',
    age: 30,
    city: 'Madrid'
};

const professionalInfo = {
    profession: 'Developer',
    email: 'carlos@email.com',
    active: true
};

const completeProfile = { ...basicInfo, ...professionalInfo };

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    console.log('Using spread to merge multiple objects:');
    console.log(completeProfile);
});