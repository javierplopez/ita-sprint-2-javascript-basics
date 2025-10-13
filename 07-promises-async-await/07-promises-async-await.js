// Exercise 1
const miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola, mundo');
    }, 2000);
});

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('Ejecutando promesa... (espera 2 segundos)');
    miPromesa.then(resultado => console.log(resultado));
});

// Exercise 2
// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    console.log('Utilizando la promesa con .then()... (espera 2 segundos)');
    miPromesa
        .then(resultado => {
            console.log(resultado);
        });
});

// Exercise 3
const promesaCondicional = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Promesa resuelta');
            } else {
                reject('Promesa rechazada');
            }
        }, 2000);
    });
};

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Probando con "Hola"... (espera 2 segundos)');
    promesaCondicional('Hola')
        .then(result => console.log(result))
        .catch(error => console.log(error));
    
    console.log('Probando con "Adios"... (espera 2 segundos)');
    promesaCondicional('Adios')
        .then(result => console.log(result))
        .catch(error => console.log(error));
});

// Exercise 4
async function ejecutarPromesa() {
    const resultado = await miPromesa;
    console.log(resultado);
}

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    console.log('Ejecutando función async/await... (espera 2 segundos)');
    ejecutarPromesa();
});

// Exercise 5
async function ejecutarPromesaConErrores() {
    try {
        const resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.log('Error:', error);
    }
}

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    console.log('Ejecutando función async/await con try/catch... (espera 2 segundos)');
    ejecutarPromesaConErrores();
});

// Exercise 6
const promesa1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 resuelta'), 2000));
const promesa2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 resuelta'), 3000));

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    console.log('Ejecutando Promise.all... (espera 3 segundos)');
    Promise.all([promesa1, promesa2])
        .then(resultados => console.log(resultados));
});