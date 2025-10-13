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
