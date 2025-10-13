// Exercise 1
const procesar = (numero, callback) => {
    callback(numero);
};

const duplicar = (num) => {
    console.log(`The double of ${num} is ${num * 2}`);
};

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    procesar(5, duplicar);
});

// Exercise 2
const calculadora = (num1, num2, callback) => {
    return callback(num1, num2);
};

const sumar = (a, b) => {
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
    return resultado;
};

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    calculadora(5, 3, sumar);
});

// Exercise 3
const esperarISaludar = (nombre, callback) => {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
};

const saludarPersona = (nombre) => {
    console.log(`Hello, ${nombre}! 2 seconds have passed.`);
};

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    esperarISaludar('Ana', saludarPersona);
});

// Exercise 4
const procesarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    procesarElements([1, 2, 3], (num, indice) => {
        console.log(`The double of ${num} is ${num * 2}`);
    });
});

// Exercise 5
const procesarCadena = (cadena, callback) => {
    const cadenaTransformada = cadena.toUpperCase();
    callback(cadenaTransformada);
};

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    procesarCadena('javascript', (cadena) => {
        console.log(`The string "${cadena}" has ${cadena.length} characters`);
    });
});