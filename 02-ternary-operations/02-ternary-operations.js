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
