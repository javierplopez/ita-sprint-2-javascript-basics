// Exercise 1
const puedeConducir = (edad) => edad >= 18 ? 'Puedes conducir' : 'No puedes conducir';

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    const result1 = puedeConducir(20);
    console.log(`Edad 20: ${result1}`); // Puedes conducir
    
    const result2 = puedeConducir(16);
    console.log(`Edad 16: ${result2}`); // No puedes conducir
    
    const result3 = puedeConducir(18);
    console.log(`Edad 18: ${result3}`); // Puedes conducir
    
    const result4 = puedeConducir(17);
    console.log(`Edad 17: ${result4}`); // No puedes conducir
});

// Exercise 2
const compararNumeros = (num1, num2) => num1 > num2 ? 'num1 es mayor' : 'num2 es mayor';

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    const result1 = compararNumeros(10, 5);
    console.log(`Comparando 10 y 5: ${result1}`); // num1 es mayor
    
    const result2 = compararNumeros(3, 8);
    console.log(`Comparando 3 y 8: ${result2}`); // num2 es mayor
    
    const result3 = compararNumeros(7, 7);
    console.log(`Comparando 7 y 7: ${result3}`); // num2 es mayor (caso igualdad)
    
    const result4 = compararNumeros(15, 2);
    console.log(`Comparando 15 y 2: ${result4}`); // num1 es mayor
});

// Exercise 3.1
const clasificarNumero = (numero) => 
    numero > 0 ? 'Positivo' : 
    numero < 0 ? 'Negativo' : 'Cero';

// HTML part to test
const exercise3_1Test = document.getElementById('run-exercise-3-1-btn');
exercise3_1Test.addEventListener('click', () => {

    const result1 = clasificarNumero(5);
    console.log(`Número 5: ${result1}`); // Positivo
    
    const result2 = clasificarNumero(-3);
    console.log(`Número -3: ${result2}`); // Negativo
    
    const result3 = clasificarNumero(0);
    console.log(`Número 0: ${result3}`); // Cero
    
    const result4 = clasificarNumero(100);
    console.log(`Número 100: ${result4}`); // Positivo
    
    const result5 = clasificarNumero(-15);
    console.log(`Número -15: ${result5}`); // Negativo
});

// Exercise 3.2
const encontrarMaximo = (a, b, c) => 
    a >= b && a >= c ? a : 
    b >= c ? b : c;

// HTML part to test
const exercise3_2Test = document.getElementById('run-exercise-3-2-btn');
exercise3_2Test.addEventListener('click', () => {
    
    const result1 = encontrarMaximo(10, 5, 8);
    console.log(`Máximo entre 10, 5, 8: ${result1}`); // 10
    
    const result2 = encontrarMaximo(3, 9, 6);
    console.log(`Máximo entre 3, 9, 6: ${result2}`); // 9
    
    const result3 = encontrarMaximo(4, 2, 15);
    console.log(`Máximo entre 4, 2, 15: ${result3}`); // 15
    
    const result4 = encontrarMaximo(7, 7, 7);
    console.log(`Máximo entre 7, 7, 7: ${result4}`); // 7 (caso igualdad)
    
    const result5 = encontrarMaximo(1, 20, 3);
    console.log(`Máximo entre 1, 20, 3: ${result5}`); // 20
    
    const result6 = encontrarMaximo(-5, -2, -8);
    console.log(`Máximo entre -5, -2, -8: ${result6}`); // -2
});

// Exercise 4
const parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        const resultado = numeros[i] % 2 === 0 ? 'Par' : 'Impar';
        console.log(`${numeros[i]} es ${resultado}`);
    }
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    const numeros = [1, 2, 3, 4, 5, 6];
    console.log('Array de prueba: [1, 2, 3, 4, 5, 6]');
    parOImpar(numeros);
    
    console.log('\nPrueba con números más grandes:');
    const numerosMayores = [10, 15, 20, 33, 42];
    console.log('Array: [10, 15, 20, 33, 42]');
    parOImpar(numerosMayores);
    
    console.log('\nPrueba con números negativos:');
    const numerosNegativos = [-1, -2, -3, 0];
    console.log('Array: [-1, -2, -3, 0]');
    parOImpar(numerosNegativos);
});
