// Exercise 1
const numeros = [1, 2, 3, 4];
// Usando map para crear array con cuadrados
const cuadrados = numeros.map(num => num * num);

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('Array original:', numeros); // [1, 2, 3, 4]
    console.log('Array cuadrados:', cuadrados); // [1, 4, 9, 16]
});

// Exercise 2
// Usando filter para obtener solo números pares
const pares = numeros.filter(num => num % 2 === 0);

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    console.log('Array original:', numeros);
    console.log('Números pares:', pares);
});

// Exercise 3
const numerosFind = [1, 10, 8, 11];
// Usando find para encontrar el primer número mayor a 10
const mayorA10 = numerosFind.find(num => num > 10);

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Array original:', numerosFind);
    console.log('Primer número mayor a 10:', mayorA10);
});

// Exercise 4
const numerosReduce = [13, 7, 8, 21];
// Usando reduce para calcular la suma total
const sumaTotal = numerosReduce.reduce((acumulador, num) => acumulador + num, 0);

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    console.log('Array original:', numerosReduce);
    console.log('Suma total:', sumaTotal);
});

// Exercise 5
const numerosCombinados = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
// Función en una sola línea: filter + map + reduce
const resultado = numerosCombinados.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    console.log('Array original:', numerosCombinados);
    console.log('Resultado:', resultado);
});

// Exercise 6
const numerosEvery = [11, 12, 13, 14];
// Usando every para verificar si todos los elementos cumplen la condición
const todosmayor10 = numerosEvery.every(num => num > 10);
// Usando some para verificar si al menos uno cumple la condición
const algunomayor10 = numerosEvery.some(num => num > 10);

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    console.log('Array original:', numerosEvery);
    console.log('Todos mayores que 10:', todosmayor10);
    console.log('Algunos mayores que 10:', algunomayor10);
});