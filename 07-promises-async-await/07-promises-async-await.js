// Exercise 1
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
});

// HTML part to test
const exercise1Test = document.getElementById('run-exercise-1-btn');
exercise1Test.addEventListener('click', () => {
    
    console.log('Executing promise... (wait 2 seconds)');
    myPromise.then(result => console.log(result));
});

// Exercise 2
const exercise2Test = document.getElementById('run-exercise-2-btn');
exercise2Test.addEventListener('click', () => {
    
    console.log('Using promise with .then()... (wait 2 seconds)');
    myPromise
        .then(result => {
            console.log(result);
        });
});

// Exercise 3
const conditionalPromise = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hello') {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        }, 2000);
    });
};

// HTML part to test
const exercise3Test = document.getElementById('run-exercise-3-btn');
exercise3Test.addEventListener('click', () => {
    
    console.log('Testing with "Hello"... (wait 2 seconds)');
    conditionalPromise('Hello')
        .then(result => console.log(result))
        .catch(error => console.log(error));
    
    console.log('Testing with "Goodbye"... (wait 2 seconds)');
    conditionalPromise('Goodbye')
        .then(result => console.log(result))
        .catch(error => console.log(error));
});

// Exercise 4
async function executePromise() {
    const result = await myPromise;
    console.log(result);
}

// HTML part to test
const exercise4Test = document.getElementById('run-exercise-4-btn');
exercise4Test.addEventListener('click', () => {
    
    console.log('Executing async/await function... (wait 2 seconds)');
    executePromise();
});

// Exercise 5
async function executePromiseWithErrors() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log('Error:', error);
    }
}

// HTML part to test
const exercise5Test = document.getElementById('run-exercise-5-btn');
exercise5Test.addEventListener('click', () => {
    
    console.log('Executing async/await function with try/catch... (wait 2 seconds)');
    executePromiseWithErrors();
});

// Exercise 6
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 3000));

// HTML part to test
const exercise6Test = document.getElementById('run-exercise-6-btn');
exercise6Test.addEventListener('click', () => {
    
    console.log('Executing Promise.all... (wait 3 seconds)');
    Promise.all([promise1, promise2])
        .then(results => console.log(results));
});