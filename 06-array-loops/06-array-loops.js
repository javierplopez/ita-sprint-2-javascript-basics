// Exercise 1
let nombres = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    nombres.forEach(nombre => console.log(nombre));
});

// Exercise 2
let noms = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    for (const nom of noms) {
        console.log(nom);
    }
});

// Exercise 3
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(num => num % 2 === 0);

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Array original:', numeros);
    console.log('Números pares:', pares);
});

// Exercise 4
let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' };

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    for (const clave in obj) {
        console.log(clave + ': ' + obj[clave]);
    }
});

// Exercise 5
let numerosBreak = [1, 2, 3, 4, 5, 6];

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    for (const num of numerosBreak) {
        if (num === 5) {
            break;
        }
        console.log(num);
    }
});

// Exercise 6
let nomsIndex = ['Anna', 'Bernat', 'Clara'];

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    for (const [index, nom] of nomsIndex.entries()) {
        console.log(index + ': ' + nom);
    }
});