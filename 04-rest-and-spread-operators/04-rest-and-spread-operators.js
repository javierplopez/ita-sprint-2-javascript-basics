// Exercise 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Usando operador spread para combinar arrays
const array3 = [...array1, ...array2];

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    // Ejemplo básico según el enunciado
    console.log('1. Combinación básica de arrays:');
    console.log('Array 1:', array1); // [1, 2, 3]
    console.log('Array 2:', array2); // [4, 5, 6]
    console.log('Array 3 (combinado):', array3); // [1, 2, 3, 4, 5, 6]
    
    // Ejemplo 2: Insertar elementos en el medio
    console.log('\n2. Insertando elementos entre arrays:');
    const array4 = [...array1, 'intermedio', ...array2];
    console.log('Array 4:', array4); // [1, 2, 3, 'intermedio', 4, 5, 6]
    
    // Ejemplo 3: Múltiples arrays
    console.log('\n3. Combinando múltiples arrays:');
    const arrayA = ['a', 'b'];
    const arrayB = ['c', 'd'];
    const arrayC = ['e', 'f'];
    const combinado = [...arrayA, ...arrayB, ...arrayC];
    console.log('Arrays A, B, C combinados:', combinado);
    
    // Ejemplo 4: Agregar elementos al principio y final
    console.log('\n4. Agregando elementos al principio y final:');
    const numeros = [2, 3, 4];
    const numerosExtendidos = [1, ...numeros, 5, 6];
    console.log('Números originales:', numeros);
    console.log('Números extendidos:', numerosExtendidos);
    
    // Ejemplo 5: Clonar un array (copia superficial)
    console.log('\n5. Clonando arrays:');
    const original = ['x', 'y', 'z'];
    const copia = [...original];
    console.log('Array original:', original);
    console.log('Copia creada:', copia);
    console.log('¿Son el mismo objeto?', original === copia); // false
    
    // Ejemplo 6: Convertir string en array
    console.log('\n6. Convirtiendo string en array:');
    const texto = 'Hola';
    const letras = [...texto];
    console.log('Texto:', texto);
    console.log('Letras individuales:', letras); // ['H', 'o', 'l', 'a']
    
    // Ejemplo 7: Spread con arrays anidados
    console.log('\n7. Arrays con diferentes tipos de datos:');
    const mixto1 = [1, 'dos', true];
    const mixto2 = [null, undefined, {nombre: 'objeto'}];
    const todoJunto = [...mixto1, ...mixto2];
    console.log('Array mixto 1:', mixto1);
    console.log('Array mixto 2:', mixto2);
    console.log('Todo junto:', todoJunto);
    
    // Ejemplo 8: Spread en el contexto de una función
    console.log('\n8. Usando spread con Math.max:');
    const numerosPrueba = [10, 5, 8, 3, 15, 1];
    const maximo = Math.max(...numerosPrueba);
    const minimo = Math.min(...numerosPrueba);
    console.log('Números:', numerosPrueba);
    console.log('Máximo:', maximo);
    console.log('Mínimo:', minimo);
});

// Exercise 2
const suma = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

// Funciones adicionales para demostrar el operador rest
const multiplicar = (...numeros) => {
    return numeros.reduce((producto, num) => producto * num, 1);
};

const promedio = (...numeros) => {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
};

const encontrarMaximo = (...numeros) => {
    if (numeros.length === 0) return undefined;
    return Math.max(...numeros);
};

const crearMensaje = (saludo, ...nombres) => {
    if (nombres.length === 0) return saludo;
    return `${saludo} ${nombres.join(', ')}!`;
};

// HTML part to test
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    console.log('=== Ejercicio 2: Operador Rest en Funciones ===');
    
    // Ejemplo básico según el enunciado
    console.log('1. Función suma básica:');
    console.log('suma(1, 2, 3) =', suma(1, 2, 3)); // 6
    console.log('suma(10, 20, 30, 40) =', suma(10, 20, 30, 40)); // 100
    console.log('suma(5) =', suma(5)); // 5
    console.log('suma() =', suma()); // 0
    
    // Ejemplo 2: Usando con arrays y spread
    console.log('\n2. Combinando rest y spread:');
    const numerosArray = [7, 8, 9];
    console.log('Array:', numerosArray);
    console.log('suma(...numerosArray) =', suma(...numerosArray)); // 24
    
    // Ejemplo 3: Función multiplicar
    console.log('\n3. Función multiplicar con rest:');
    console.log('multiplicar(2, 3, 4) =', multiplicar(2, 3, 4)); // 24
    console.log('multiplicar(5, 6) =', multiplicar(5, 6)); // 30
    console.log('multiplicar(7) =', multiplicar(7)); // 7
    console.log('multiplicar() =', multiplicar()); // 1
    
    // Ejemplo 4: Función promedio
    console.log('\n4. Calculando promedios:');
    console.log('promedio(10, 20, 30) =', promedio(10, 20, 30)); // 20
    console.log('promedio(1, 2, 3, 4, 5) =', promedio(1, 2, 3, 4, 5)); // 3
    console.log('promedio() =', promedio()); // 0
    
    // Ejemplo 5: Encontrar máximo
    console.log('\n5. Encontrando el máximo:');
    console.log('encontrarMaximo(45, 12, 78, 23) =', encontrarMaximo(45, 12, 78, 23)); // 78
    console.log('encontrarMaximo(100) =', encontrarMaximo(100)); // 100
    console.log('encontrarMaximo() =', encontrarMaximo()); // undefined
    
    // Ejemplo 6: Rest con parámetros mixtos
    console.log('\n6. Parámetros mixtos (normal + rest):');
    console.log('crearMensaje("Hola") =', crearMensaje("Hola"));
    console.log('crearMensaje("Hola", "Ana") =', crearMensaje("Hola", "Ana"));
    console.log('crearMensaje("Bienvenidos", "Carlos", "María", "Juan") =', 
                crearMensaje("Bienvenidos", "Carlos", "María", "Juan"));
    
    // Ejemplo 7: Rest con diferentes tipos de datos
    console.log('\n7. Rest con diferentes tipos:');
    const procesarDatos = (...elementos) => {
        console.log(`Recibidos ${elementos.length} elementos:`, elementos);
        elementos.forEach((elemento, indice) => {
            console.log(`  ${indice}: ${elemento} (tipo: ${typeof elemento})`);
        });
    };
    procesarDatos(42, "texto", true, null, {nombre: "objeto"});
    
    // Ejemplo 8: Suma de múltiples arrays
    console.log('\n8. Sumando múltiples arrays:');
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    const array3 = [6, 7, 8, 9];
    const sumaTotal = suma(...array1, ...array2, ...array3);
    console.log('Arrays:', array1, array2, array3);
    console.log('Suma total usando rest + spread:', sumaTotal); // 45
});

// Exercise 3
const objeto1 = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Madrid'
};

// Copiando objeto con spread
const objeto2 = { ...objeto1 };

// Modificando objeto2
objeto2.edad = 30;
objeto2.profesion = 'Desarrolladora';

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    console.log('=== Ejercicio 3: Copiando Objetos con Spread ===');
    
    // Ejemplo básico según el enunciado
    console.log('1. Comparación básica de objetos:');
    console.log('Objeto1:', objeto1);
    console.log('Objeto2:', objeto2);
    console.log('¿Son el mismo objeto?', objeto1 === objeto2); // false
    console.log('¿objeto1 cambió?', objeto1.edad === 25); // true (no cambió)
    
    // Ejemplo 2: Creando múltiples copias
    console.log('\n2. Creando múltiples copias:');
    const persona = { nombre: 'Carlos', apellido: 'González', edad: 28 };
    const copia1 = { ...persona };
    const copia2 = { ...persona };
    
    copia1.edad = 35;
    copia2.nombre = 'María';
    copia2.edad = 22;
    
    console.log('Original:', persona);
    console.log('Copia 1:', copia1);
    console.log('Copia 2:', copia2);
    
    // Ejemplo 3: Agregando propiedades durante la copia
    console.log('\n3. Agregando propiedades durante la copia:');
    const producto = { nombre: 'Laptop', precio: 999 };
    const productoConDescuento = { 
        ...producto, 
        descuento: 0.1,
        precioFinal: producto.precio * 0.9
    };
    
    console.log('Producto original:', producto);
    console.log('Producto con descuento:', productoConDescuento);
    
    // Ejemplo 4: Sobrescribiendo propiedades
    console.log('\n4. Sobrescribiendo propiedades:');
    const configuracion = { tema: 'claro', idioma: 'es', notificaciones: true };
    const nuevaConfiguracion = { 
        ...configuracion, 
        tema: 'oscuro',  // Sobrescribe la propiedad existente
        fuente: 'Arial'  // Agrega nueva propiedad
    };
    
    console.log('Configuración original:', configuracion);
    console.log('Nueva configuración:', nuevaConfiguracion);
    
    // Ejemplo 5: Combinando múltiples objetos
    console.log('\n5. Combinando múltiples objetos:');
    const datosPersonales = { nombre: 'Luis', edad: 32 };
    const datosContacto = { email: 'luis@email.com', telefono: '123456789' };
    const datosTrabajo = { empresa: 'TechCorp', puesto: 'Developer' };
    
    const perfilCompleto = { 
        ...datosPersonales, 
        ...datosContacto, 
        ...datosTrabajo
    };
    
    console.log('Datos personales:', datosPersonales);
    console.log('Datos contacto:', datosContacto);
    console.log('Datos trabajo:', datosTrabajo);
    console.log('Perfil completo:', perfilCompleto);
    
    // Ejemplo 6: Copia superficial vs referencia
    console.log('\n6. Demostración de copia superficial:');
    const usuario = {
        id: 1,
        info: {
            nombre: 'Pedro',
            email: 'pedro@email.com'
        },
        hobbies: ['leer', 'nadar']
    };
    
    const usuarioCopia = { ...usuario };
    
    // Modificando propiedades primitivas (no afecta al original)
    usuarioCopia.id = 2;
    
    // Modificando objetos anidados (SÍ afecta al original - copia superficial)
    usuarioCopia.info.nombre = 'Juan';
    usuarioCopia.hobbies.push('correr');
    
    console.log('Usuario original:', usuario);
    console.log('Usuario copia:', usuarioCopia);
    console.log('⚠️  Nota: Los objetos anidados comparten referencia');
    
    // Ejemplo 7: Orden de propiedades al combinar
    console.log('\n7. Orden importa al combinar objetos:');
    const defecto = { color: 'azul', tamaño: 'mediano', precio: 50 };
    const personalizado = { color: 'rojo', material: 'algodón' };
    
    const opcion1 = { ...defecto, ...personalizado };
    const opcion2 = { ...personalizado, ...defecto };
    
    console.log('Defecto:', defecto);
    console.log('Personalizado:', personalizado);
    console.log('Opción 1 (defecto primero):', opcion1);
    console.log('Opción 2 (personalizado primero):', opcion2);
    
    // Ejemplo 8: Casos edge
    console.log('\n8. Casos especiales:');
    const vacio = {};
    const copiaVacio = { ...vacio };
    
    const conNull = { valor: null, indefinido: undefined };
    const copiaConNull = { ...conNull };
    
    console.log('Objeto vacío:', vacio);
    console.log('Copia objeto vacío:', copiaVacio);
    console.log('Con valores especiales:', conNull);
    console.log('Copia con valores especiales:', copiaConNull);
});

// Exercise 4
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'morado'];

// Destructuring con operador rest
const [primero, segundo, ...resto] = colores;

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    console.log('=== Ejercicio 4: Resto en Destructuring ===');
    
    // Ejemplo básico según el enunciado
    console.log('1. Destructuring básico con rest:');
    console.log('Primer elemento:', primero); // 'rojo'
    console.log('Segundo elemento:', segundo); // 'verde'
    console.log('Resto de elementos:', resto); // ['azul', 'amarillo', 'naranja', 'morado']
    console.log('Array original:', colores);
    
    // Ejemplo 2: Diferentes patrones de destructuring
    console.log('\n2. Diferentes patrones de destructuring:');
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const [uno, dos, ...restantes] = numeros;
    console.log('Primeros dos:', uno, dos);
    console.log('Restantes:', restantes);
    
    const [a, , c, ...otros] = numeros; // Omitiendo el segundo elemento
    console.log('Primero (a):', a);
    console.log('Tercero (c):', c);
    console.log('El resto (otros):', otros);
    
    // Ejemplo 3: Rest al final - única posición válida
    console.log('\n3. Rest siempre debe ir al final:');
    const frutas = ['manzana', 'pera', 'uva', 'kiwi', 'mango'];
    
    const [fruta1, ...otrasFrutas] = frutas;
    console.log('Primera fruta:', fruta1);
    console.log('Otras frutas:', otrasFrutas);
    
    // También se puede tomar solo el primer elemento y el resto
    const [primera, ...todasLasDemas] = frutas;
    console.log('Primera:', primera);
    console.log('Todas las demás:', todasLasDemas);
    
    // Ejemplo 4: Con arrays de diferentes tamaños
    console.log('\n4. Arrays de diferentes tamaños:');
    
    const arrayCorto = ['x', 'y'];
    const [x1, x2, ...restoCorto] = arrayCorto;
    console.log('Array corto:', arrayCorto);
    console.log('x1:', x1, 'x2:', x2, 'resto:', restoCorto); // resto será []
    
    const arrayUnitario = ['solo'];
    const [unico, ...restoUnitario] = arrayUnitario;
    console.log('Array unitario:', arrayUnitario);
    console.log('Único:', unico, 'resto:', restoUnitario); // resto será []
    
    const arrayVacio = [];
    const [nada, ...restoVacio] = arrayVacio;
    console.log('Array vacío:', arrayVacio);
    console.log('Nada:', nada, 'resto:', restoVacio); // ambos undefined y []
    
    // Ejemplo 5: Destructuring con tipos mixtos
    console.log('\n5. Arrays con tipos mixtos:');
    const mixto = [42, 'texto', true, null, { objeto: 'valor' }, [1, 2, 3]];
    const [numero, texto, booleano, ...restoMixto] = mixto;
    
    console.log('Array mixto:', mixto);
    console.log('Número:', numero, typeof numero);
    console.log('Texto:', texto, typeof texto);
    console.log('Booleano:', booleano, typeof booleano);
    console.log('Resto mixto:', restoMixto);
    
    // Ejemplo 6: Destructuring anidado con rest
    console.log('\n6. Destructuring anidado:');
    const anidado = [['a', 'b', 'c'], ['x', 'y', 'z'], 'final'];
    const [[primerSubarray, ...restoSubarray], segundoArray, ultimo] = anidado;
    
    console.log('Array anidado:', anidado);
    console.log('Primer elemento del primer subarray:', primerSubarray);
    console.log('Resto del primer subarray:', restoSubarray);
    console.log('Segundo array completo:', segundoArray);
    console.log('Último elemento:', ultimo);
    
    // Ejemplo 7: Uso práctico - separar cabecera de datos
    console.log('\n7. Caso práctico - separar cabecera de datos:');
    const csvData = ['Nombre', 'Edad', 'Ciudad', 'Ana', '25', 'Madrid', 'Carlos', '30', 'Barcelona'];
    const [nombreCol, edadCol, ciudadCol, ...registros] = csvData;
    
    console.log('Datos CSV:', csvData);
    console.log('Cabeceras:', [nombreCol, edadCol, ciudadCol]);
    console.log('Registros de datos:', registros);
    
    // Ejemplo 8: Intercambio con destructuring y rest
    console.log('\n8. Reorganización de arrays:');
    const original = [1, 2, 3, 4, 5];
    const [primerElem, ...restoElem] = original;
    const reorganizado = [...restoElem, primerElem]; // Mover el primer elemento al final
    
    console.log('Array original:', original);
    console.log('Primer elemento:', primerElem);
    console.log('Resto elementos:', restoElem);
    console.log('Array reorganizado (primero al final):', reorganizado);
    
    // Ejemplo 9: Función que usa destructuring con rest
    console.log('\n9. Función con destructuring y rest:');
    const procesarLista = (lista) => {
        if (lista.length === 0) {
            return 'Lista vacía';
        }
        
        const [cabeza, ...cola] = lista;
        return {
            primero: cabeza,
            resto: cola,
            cantidad: cola.length,
            ultimo: cola[cola.length - 1] || null
        };
    };
    
    const resultado1 = procesarLista(['inicio', 'medio1', 'medio2', 'fin']);
    const resultado2 = procesarLista(['solo']);
    const resultado3 = procesarLista([]);
    
    console.log('Procesando [inicio, medio1, medio2, fin]:', resultado1);
    console.log('Procesando [solo]:', resultado2);
    console.log('Procesando []:', resultado3);
});

// Exercise 5
const saludar = (nombre, apellido, edad) => {
    return `Hola, ${nombre} ${apellido}. Tienes ${edad} años.`;
};

const datosPersona = ['Ana', 'García', 28];

// Funciones adicionales para demostrar spread en llamadas
const calcular = (a, b, c) => {
    const suma = a + b + c;
    const producto = a * b * c;
    const promedio = suma / 3;
    return { suma, producto, promedio };
};

const crearFecha = (año, mes, dia) => {
    return new Date(año, mes - 1, dia); // mes - 1 porque Date usa índices 0-11 para meses
};

const formatearTexto = (texto, mayusculas, prefijo) => {
    let resultado = texto;
    if (mayusculas) {
        resultado = resultado.toUpperCase();
    }
    if (prefijo) {
        resultado = `${prefijo}: ${resultado}`;
    }
    return resultado;
};

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    console.log('=== Ejercicio 5: Spread en Funciones ===');
    
    // Ejemplo básico según el enunciado
    console.log('1. Llamadas básicas con y sin spread:');
    
    // Llamada normal
    const mensaje1 = saludar('Carlos', 'López', 35);
    console.log('Llamada normal:', mensaje1);
    
    // Llamada usando spread (según el enunciado)
    const mensaje2 = saludar(...datosPersona);
    console.log('Llamada con spread:', mensaje2);
    console.log('Array usado:', datosPersona);
    
    // Ejemplo 2: Función matemática con spread
    console.log('\n2. Operaciones matemáticas:');
    const numeros = [5, 10, 15];
    
    console.log('Array de números:', numeros);
    const resultado = calcular(...numeros);
    console.log('Resultado del cálculo:', resultado);
    
    // Comparación con llamada normal
    const resultadoNormal = calcular(5, 10, 15);
    console.log('¿Mismo resultado?', JSON.stringify(resultado) === JSON.stringify(resultadoNormal));
    
    // Ejemplo 3: Creación de fechas con spread
    console.log('\n3. Creando fechas con arrays:');
    const fechaNacimiento = [1995, 8, 15]; // 15 de agosto de 1995
    const fechaActual = [2024, 12, 25]; // 25 de diciembre de 2024
    
    const fecha1 = crearFecha(...fechaNacimiento);
    const fecha2 = crearFecha(...fechaActual);
    
    console.log('Array fecha nacimiento:', fechaNacimiento);
    console.log('Fecha creada:', fecha1.toLocaleDateString());
    console.log('Array fecha actual:', fechaActual);
    console.log('Fecha creada:', fecha2.toLocaleDateString());
    
    // Ejemplo 4: Función con diferentes tipos de parámetros
    console.log('\n4. Formateo de texto con parámetros mixtos:');
    const configTexto1 = ['javascript es genial', true, 'INFO'];
    const configTexto2 = ['hola mundo', false, null];
    
    const texto1 = formatearTexto(...configTexto1);
    const texto2 = formatearTexto(...configTexto2);
    
    console.log('Config 1:', configTexto1);
    console.log('Resultado 1:', texto1);
    console.log('Config 2:', configTexto2);
    console.log('Resultado 2:', texto2);
    
    // Ejemplo 5: Math.max y Math.min con spread
    console.log('\n5. Funciones nativas con spread:');
    const puntuaciones = [85, 92, 78, 96, 88, 91];
    
    const maximo = Math.max(...puntuaciones);
    const minimo = Math.min(...puntuaciones);
    
    console.log('Puntuaciones:', puntuaciones);
    console.log('Máximo:', maximo);
    console.log('Mínimo:', minimo);
    
    // Sin spread tendríamos que usar apply:
    const maximoTradicional = Math.max.apply(null, puntuaciones);
    console.log('Máximo (método tradicional):', maximoTradicional);
    console.log('¿Mismo resultado?', maximo === maximoTradicional);
    
    // Ejemplo 6: Spread con arrays de diferentes tamaños
    console.log('\n6. Arrays de diferentes tamaños:');
    
    const arrayCompleto = ['Pedro', 'Martínez', 42];
    const arraySobrante = ['Luis', 'González', 30, 'extra1', 'extra2'];
    const arrayIncompleto = ['María', 'Rodríguez'];
    
    console.log('Array completo:', saludar(...arrayCompleto));
    console.log('Array con extras:', saludar(...arraySobrante)); // Los extras se ignoran
    console.log('Array incompleto:', saludar(...arrayIncompleto)); // El último será undefined
    
    // Ejemplo 7: Combinando arrays y valores individuales
    console.log('\n7. Combinando arrays y valores:');
    const primeroDatos = ['Sofia'];
    const resto = ['Fernández', 26];
    
    // Mezclando spread con valores individuales no es directo en la llamada,
    // pero podemos crear un array temporal
    const datosCompletos = [...primeroDatos, ...resto];
    const mensaje3 = saludar(...datosCompletos);
    console.log('Datos combinados:', datosCompletos);
    console.log('Mensaje:', mensaje3);
    
    // Ejemplo 8: Función que retorna un array para usar con spread
    console.log('\n8. Usando resultado de función con spread:');
    
    const obtenerDatos = () => ['Roberto', 'Sánchez', 45];
    const obtenerNumeros = () => [100, 200, 300];
    
    const saludo = saludar(...obtenerDatos());
    const calculo = calcular(...obtenerNumeros());
    
    console.log('Datos obtenidos:', obtenerDatos());
    console.log('Saludo generado:', saludo);
    console.log('Números obtenidos:', obtenerNumeros());
    console.log('Cálculo realizado:', calculo);
    
    // Ejemplo 9: Casos edge y errores comunes
    console.log('\n9. Casos especiales:');
    
    // Array vacío
    try {
        const arrayVacio = [];
        const resultadoVacio = saludar(...arrayVacio);
        console.log('Con array vacío:', resultadoVacio); // undefined undefined undefined
    } catch (error) {
        console.log('Error con array vacío:', error.message);
    }
    
    // Array con valores null/undefined
    const arrayConNull = [null, undefined, 'test'];
    const resultadoConNull = saludar(...arrayConNull);
    console.log('Con null/undefined:', resultadoConNull);
    
    // Demasiados elementos
    const arrayLargo = ['A', 'B', 'C', 'D', 'E', 'F'];
    const resultadoLargo = saludar(...arrayLargo); // Solo toma los primeros 3
    console.log('Array largo (solo primeros 3):', resultadoLargo);
});

// Exercise 6
const objetoA = {
    nombre: 'Carlos',
    edad: 30,
    ciudad: 'Madrid'
};

const objetoB = {
    profesion: 'Desarrollador',
    email: 'carlos@email.com',
    activo: true
};

// Fusionando objetos con spread
const objetoFusionado = { ...objetoA, ...objetoB };

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    console.log('=== Ejercicio 6: Fusionando Objetos con Spread ===');
    
    // Ejemplo básico según el enunciado
    console.log('1. Fusión básica de objetos:');
    console.log('Objeto A:', objetoA);
    console.log('Objeto B:', objetoB);
    console.log('Objeto fusionado:', objetoFusionado);
    
    // Verificar que son objetos independientes
    console.log('¿Son el mismo objeto? (objA === fusionado):', objetoA === objetoFusionado);
    console.log('¿Son el mismo objeto? (objB === fusionado):', objetoB === objetoFusionado);
    
    // Ejemplo 2: Fusión con propiedades que se sobrescriben
    console.log('\n2. Fusión con sobrescritura de propiedades:');
    
    const persona = { nombre: 'Ana', edad: 25, ciudad: 'Barcelona' };
    const actualizacion = { edad: 26, profesion: 'Diseñadora', salario: 35000 };
    
    const personaActualizada = { ...persona, ...actualizacion };
    
    console.log('Persona original:', persona);
    console.log('Datos de actualización:', actualizacion);
    console.log('Persona actualizada:', personaActualizada);
    console.log('Nota: La edad se sobrescribió de 25 a 26');
    
    // Ejemplo 3: Orden importa en la fusión
    console.log('\n3. El orden importa en la fusión:');
    
    const defecto = { tema: 'claro', idioma: 'es', tamaño: 'mediano' };
    const usuario = { tema: 'oscuro', notificaciones: true };
    
    const config1 = { ...defecto, ...usuario }; // usuario sobrescribe defecto
    const config2 = { ...usuario, ...defecto }; // defecto sobrescribe usuario
    
    console.log('Configuración por defecto:', defecto);
    console.log('Preferencias del usuario:', usuario);
    console.log('Fusión 1 (defecto + usuario):', config1);
    console.log('Fusión 2 (usuario + defecto):', config2);
    
    // Ejemplo 4: Fusionando múltiples objetos
    console.log('\n4. Fusionando múltiples objetos:');
    
    const datosPersonales = { nombre: 'Luis', apellido: 'Martínez' };
    const datosContacto = { email: 'luis@email.com', telefono: '123-456-789' };
    const datosProfesionales = { empresa: 'TechCorp', cargo: 'Senior Developer', experiencia: 5 };
    const preferencias = { tema: 'oscuro', idioma: 'es' };
    
    const perfilCompleto = {
        ...datosPersonales,
        ...datosContacto,
        ...datosProfesionales,
        ...preferencias
    };
    
    console.log('Datos personales:', datosPersonales);
    console.log('Datos de contacto:', datosContacto);
    console.log('Datos profesionales:', datosProfesionales);
    console.log('Preferencias:', preferencias);
    console.log('Perfil completo:', perfilCompleto);
    
    // Ejemplo 5: Agregando propiedades durante la fusión
    console.log('\n5. Agregando propiedades durante la fusión:');
    
    const producto = { nombre: 'Laptop', precio: 999, categoria: 'Electrónicos' };
    const descuento = { porcentaje: 15, valido: true };
    
    const productoConOferta = {
        ...producto,
        ...descuento,
        precioFinal: producto.precio * (1 - descuento.porcentaje / 100),
        fechaOferta: new Date().toISOString().split('T')[0],
        id: Math.random().toString(36).substr(2, 9)
    };
    
    console.log('Producto base:', producto);
    console.log('Datos de descuento:', descuento);
    console.log('Producto con oferta:', productoConOferta);
    
    // Ejemplo 6: Fusión condicional
    console.log('\n6. Fusión condicional:');
    
    const usuarioBase = { id: 1, nombre: 'Pedro', activo: true };
    const esAdmin = false;
    const esPremium = true;
    
    const usuarioConRoles = {
        ...usuarioBase,
        ...(esAdmin && { rol: 'admin', permisos: ['leer', 'escribir', 'eliminar'] }),
        ...(esPremium && { plan: 'premium', limite: 1000 })
    };
    
    console.log('Usuario base:', usuarioBase);
    console.log('Es admin:', esAdmin, '- Es premium:', esPremium);
    console.log('Usuario con roles:', usuarioConRoles);
    
    // Ejemplo 7: Fusión con objetos anidados (cuidado con referencias)
    console.log('\n7. Fusión con objetos anidados:');
    
    const cliente = {
        nombre: 'María',
        direccion: { calle: 'Gran Vía', numero: 123, ciudad: 'Madrid' },
        contactos: ['email', 'telefono']
    };
    
    const actualizacionCliente = {
        apellido: 'García',
        direccion: { codigo: '28013' }, // Solo agrega código postal
        contactos: ['whatsapp'] // Reemplaza completamente el array
    };
    
    const clienteActualizado = { ...cliente, ...actualizacionCliente };
    
    console.log('Cliente original:', cliente);
    console.log('Actualización:', actualizacionCliente);
    console.log('Cliente actualizado:', clienteActualizado);
    console.log('⚠️ Nota: Los objetos anidados se reemplazan completamente, no se fusionan');
    
    // Ejemplo 8: Casos especiales y edge cases
    console.log('\n8. Casos especiales:');
    
    const objetoVacio = {};
    const objetoConNull = { valor: null, indefinido: undefined };
    const objetoConFunciones = { 
        saludar: () => 'Hola',
        calcular: (x, y) => x + y
    };
    
    const fusion1 = { ...objetoVacio, nombre: 'Test' };
    const fusion2 = { ...objetoConNull, activo: true };
    const fusion3 = { ...objetoConFunciones, version: '1.0' };
    
    console.log('Fusión con objeto vacío:', fusion1);
    console.log('Fusión con null/undefined:', fusion2);
    console.log('Fusión con funciones:', fusion3);
    console.log('Función fusionada ejecutada:', fusion3.saludar());
    
    // Ejemplo 9: Comparación con Object.assign()
    console.log('\n9. Comparación con Object.assign():');
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    
    const conSpread = { ...obj1, ...obj2 };
    const conAssign = Object.assign({}, obj1, obj2);
    
    console.log('Original 1:', obj1);
    console.log('Original 2:', obj2);
    console.log('Con spread:', conSpread);
    console.log('Con Object.assign():', conAssign);
    console.log('¿Mismo resultado?', JSON.stringify(conSpread) === JSON.stringify(conAssign));
    
    // Ejemplo 10: Uso práctico - configuración de aplicación
    console.log('\n10. Caso práctico - configuración de aplicación:');
    
    const configPorDefecto = {
        tema: 'claro',
        idioma: 'es',
        notificaciones: true,
        autoguardado: true,
        intervaloAutoguardado: 300,
        version: '1.0.0'
    };
    
    const configUsuario = {
        tema: 'oscuro',
        notificaciones: false,
        nombre: 'Usuario123'
    };
    
    const configFinal = {
        ...configPorDefecto,
        ...configUsuario,
        timestamp: Date.now(),
        inicializada: true
    };
    
    console.log('Configuración por defecto:', configPorDefecto);
    console.log('Configuración del usuario:', configUsuario);
    console.log('Configuración final de la app:', configFinal);
});