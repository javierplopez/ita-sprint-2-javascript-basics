// Exercise 1
const procesar = (numero, callback) => {
    callback(numero);
};

// Ejemplo de funciones callback
const duplicar = (num) => {
    console.log(`El doble de ${num} es ${num * 2}`);
};

const cuadrado = (num) => {
    console.log(`El cuadrado de ${num} es ${num * num}`);
};

const saludar = (num) => {
    console.log(`¡Hola! El número recibido es: ${num}`);
};

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    // Ejemplo 1: Usando función callback predefinida
    console.log('1. Usando función callback predefinida:');
    procesar(5, duplicar);
    
    // Ejemplo 2: Usando función de flecha inline
    console.log('\n2. Usando función de flecha inline:');
    procesar(8, (num) => {
        console.log(`El cuadrado de ${num} es ${num * num}`);
    });
    
    // Ejemplo 3: Usando otra función callback predefinida
    console.log('\n3. Usando otra función callback:');
    procesar(10, cuadrado);
    
    // Ejemplo 4: Callback con diferente comportamiento
    console.log('\n4. Callback con comportamiento personalizado:');
    procesar(7, saludar);
    
    // Ejemplo 5: Callback más complejo
    console.log('\n5. Callback con lógica condicional:');
    procesar(15, (num) => {
        if (num % 2 === 0) {
            console.log(`${num} es un número par`);
        } else {
            console.log(`${num} es un número impar`);
        }
    });
});

// Exercise 2
const calculadora = (num1, num2, callback) => {
    return callback(num1, num2);
};

// Funciones callback para operaciones matemáticas
const sumar = (a, b) => {
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
    return resultado;
};

const restar = (a, b) => {
    const resultado = a - b;
    console.log(`${a} - ${b} = ${resultado}`);
    return resultado;
};

const multiplicar = (a, b) => {
    const resultado = a * b;
    console.log(`${a} × ${b} = ${resultado}`);
    return resultado;
};

const dividir = (a, b) => {
    if (b !== 0) {
        const resultado = a / b;
        console.log(`${a} ÷ ${b} = ${resultado}`);
        return resultado;
    } else {
        console.log('Error: No se puede dividir por cero');
        return null;
    }
};

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    // Ejemplo 1: Suma (según el enunciado)
    console.log('1. Suma (función predefinida):');
    calculadora(5, 3, sumar);
    
    // Ejemplo 2: Resta con función de flecha inline
    console.log('\n2. Resta (función inline):');
    calculadora(10, 7, (a, b) => {
        const resultado = a - b;
        console.log(`${a} - ${b} = ${resultado}`);
        return resultado;
    });
    
    // Ejemplo 3: Multiplicación
    console.log('\n3. Multiplicación:');
    calculadora(6, 4, multiplicar);
    
    // Ejemplo 4: División
    console.log('\n4. División:');
    calculadora(15, 3, dividir);
    
    // Ejemplo 5: División por cero (caso edge)
    console.log('\n5. División por cero (manejo de errores):');
    calculadora(8, 0, dividir);
    
    // Ejemplo 6: Operación personalizada (potencia)
    console.log('\n6. Operación personalizada (potencia):');
    calculadora(2, 8, (a, b) => {
        const resultado = Math.pow(a, b);
        console.log(`${a}^${b} = ${resultado}`);
        return resultado;
    });
});

// Exercise 3
const esperarISaludar = (nombre, callback) => {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
};

// Funciones callback para saludos
const saludarPersona = (nombre) => {
    console.log(`¡Hola, ${nombre}! Han pasado 2 segundos.`);
};

const despedirse = (nombre) => {
    console.log(`¡Adiós, ${nombre}! Que tengas un buen día.`);
};

const presentar = (nombre) => {
    console.log(`Me complace presentarles a ${nombre}.`);
};

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    console.log('Iniciando funciones asíncronas... (espera 2 segundos para cada una)');
    
    // Ejemplo 1: Callback predefinido
    console.log('\n1. Ejecutando primer saludo...');
    esperarISaludar('Ana', saludarPersona);
    
    // Ejemplo 2: Callback inline con diferente mensaje
    console.log('2. Ejecutando segundo saludo...');
    esperarISaludar('Carlos', (nombre) => {
        console.log(`¡Bienvenido, ${nombre}!`);
    });
    
    // Ejemplo 3: Otro callback predefinido con diferentes segundos
    setTimeout(() => {
        console.log('3. Ejecutando despedida...');
        esperarISaludar('María', despedirse);
    }, 1000);
    
    // Ejemplo 4: Callback con lógica más compleja
    setTimeout(() => {
        console.log('4. Ejecutando presentación...');
        esperarISaludar('Dr. Rodríguez', presentar);
    }, 2000);
    
    // Ejemplo 5: Callback con timestamp
    setTimeout(() => {
        console.log('5. Ejecutando saludo con timestamp...');
        esperarISaludar('Laura', (nombre) => {
            const ahora = new Date().toLocaleTimeString();
            console.log(`¡Hola ${nombre}! Son las ${ahora} y han pasado 2 segundos.`);
        });
    }, 3000);
    
    // Mensaje informativo
    setTimeout(() => {
        console.log('\n✅ Todas las funciones asíncronas han sido iniciadas. Observa los resultados aparecer cada 2 segundos.');
    }, 100);
});

// Exercise 4
const procesarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};

// Funciones callback para procesar elementos
const mostrarElemento = (elemento, indice) => {
    console.log(`Índice ${indice}: ${elemento}`);
};

const duplicarNumero = (numero, indice) => {
    const resultado = numero * 2;
    console.log(`El doble de ${numero} (posición ${indice}) es ${resultado}`);
};

const convertirMayusculas = (texto, indice) => {
    const resultado = texto.toUpperCase();
    console.log(`${indice + 1}. ${texto} -> ${resultado}`);
};

const validarTipo = (elemento, indice) => {
    const tipo = typeof elemento;
    console.log(`Elemento ${indice}: ${elemento} es de tipo '${tipo}'`);
};

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    // Ejemplo 1: Array de frutas con callback predefinido
    console.log('1. Procesando array de frutas:');
    const frutas = ['manzana', 'banana', 'naranja'];
    procesarElements(frutas, mostrarElemento);
    
    // Ejemplo 2: Array de números con callback inline (según el enunciado)
    console.log('\n2. Duplicando números:');
    procesarElements([1, 2, 3], (num, indice) => {
        console.log(`El doble de ${num} es ${num * 2}`);
    });
    
    // Ejemplo 3: Array de números con callback predefinido más detallado
    console.log('\n3. Duplicando con más información:');
    const numeros = [5, 10, 15];
    procesarElements(numeros, duplicarNumero);
    
    // Ejemplo 4: Array de strings convertir a mayúsculas
    console.log('\n4. Convirtiendo a mayúsculas:');
    const nombres = ['ana', 'carlos', 'maría'];
    procesarElements(nombres, convertirMayusculas);
    
    // Ejemplo 5: Array mixto validando tipos
    console.log('\n5. Validando tipos de datos:');
    const mixto = [42, 'hola', true, null, undefined];
    procesarElements(mixto, validarTipo);
    
    // Ejemplo 6: Callback más complejo - suma acumulativa
    console.log('\n6. Suma acumulativa:');
    let suma = 0;
    procesarElements([10, 20, 30, 40], (numero, indice) => {
        suma += numero;
        console.log(`Sumando ${numero}: total acumulado = ${suma}`);
    });
    
    // Ejemplo 7: Array vacío (caso edge)
    console.log('\n7. Procesando array vacío:');
    procesarElements([], (elemento, indice) => {
        console.log('Este mensaje no debería aparecer');
    });
    console.log('✅ Array vacío procesado correctamente (sin elementos que procesar)');
});

// Exercise 5
const procesarCadena = (cadena, callback) => {
    const cadenaTransformada = cadena.toUpperCase();
    callback(cadenaTransformada);
};

// Funciones callback para procesar cadenas
const mostrarCadena = (cadena) => {
    console.log(`Cadena transformada: ${cadena}`);
};

const analizarCadena = (cadena) => {
    console.log(`Análisis: "${cadena}" - ${cadena.length} caracteres, ${cadena.split(' ').length} palabras`);
};

const decorarCadena = (cadena) => {
    console.log(`*** ${cadena} ***`);
};

const validarCadena = (cadena) => {
    const tieneNumeros = /\d/.test(cadena);
    const tieneEspacios = /\s/.test(cadena);
    console.log(`"${cadena}" - Contiene números: ${tieneNumeros}, Contiene espacios: ${tieneEspacios}`);
};

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    // Ejemplo 1: Callback predefinido básico
    console.log('1. Usando callback predefinido:');
    procesarCadena('hola mundo', mostrarCadena);
    
    // Ejemplo 2: Callback inline con análisis de caracteres (según el enunciado)
    console.log('\n2. Analizando caracteres:');
    procesarCadena('javascript', (cadena) => {
        console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    });
    
    // Ejemplo 3: Callback predefinido para análisis completo
    console.log('\n3. Análisis completo:');
    procesarCadena('hola mundo javascript', analizarCadena);
    
    // Ejemplo 4: Decoración de la cadena
    console.log('\n4. Decorando cadena:');
    procesarCadena('importante', decorarCadena);
    
    // Ejemplo 5: Validación con expresiones regulares
    console.log('\n5. Validando contenido:');
    procesarCadena('abc123 def', validarCadena);
    procesarCadena('solotexto', validarCadena);
    
    // Ejemplo 6: Callback inline complejo - crear acrónimo
    console.log('\n6. Creando acrónimo:');
    procesarCadena('hypertext markup language', (cadena) => {
        const acronimo = cadena.split(' ')
            .map(palabra => palabra[0])
            .join('');
        console.log(`Acrónimo de "${cadena}": ${acronimo}`);
    });
    
    // Ejemplo 7: Procesamiento con emojis y caracteres especiales
    console.log('\n7. Texto con caracteres especiales:');
    procesarCadena('¡Hola! ¿Cómo estás? 😊', (cadena) => {
        console.log(`Procesado: ${cadena}`);
        console.log(`Primer carácter: "${cadena[0]}", Último: "${cadena[cadena.length - 1]}"`);
    });
    
    // Ejemplo 8: Cadena vacía (caso edge)
    console.log('\n8. Procesando cadena vacía:');
    procesarCadena('', (cadena) => {
        console.log(`Cadena vacía procesada: "${cadena}" (longitud: ${cadena.length})`);
    });
});