console.log("\n\nPassing a function as an Arguement");
console.log("=================================\n\n")
document.getElementById('runTest').addEventListener("click", buttonClicked);
function buttonClicked() {
    setTimeout(function showMessage() {
    alert('You clicked the button 2 seconds ago');
    }, 2000);
}

console.log("\n\nUse Arrow Functions");
console.log("======================\n\n")
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3));

console.log("\n\nProvide a Default Parameter Value");
console.log("=====================================\n\n");
function greet(name, age=30) {
    console.log(`Hello, This is ${name}, I am ${age} years old!`);
}

greet('Md. Yousuf Mansur'); 

console.log("\n\nFunction That Accepts Unlimited Arguments");
console.log("=====================================\n\n");
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(2, 4, 6, 8, 10));

console.log("\n\nNamed Function Parameters");
console.log("==============================\n\n");
function greet({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = { name: 'Md. Yousuf Mansur', age: 30 };
greet(person);

console.log("\n\nNamed Function Parameters");
console.log("==============================\n\n");
  //a closure gives you access to an outer function's scope from an inner function
function greetingMaker(greeting) {
    function addName(name) {
        return `${greeting} ${name}`;
    }
    return addName;
}
const daytimeGreeting = greetingMaker('Good Day');
const nightGreeting = greetingMaker('Good Evening');
console.log(daytimeGreeting('Monsur')); 
console.log(nightGreeting('Sarkar'));

console.log("\n\nGenerator Function That Yields Multiple Values");
console.log("==============================\n\n");
function* generateValues() {
    yield 1;
    yield 2;
    yield 3;
    }
    const generator = generateValues();
    for (const value of generator){
    console.log(value);
    }
    
console.log("\n\nReducing redundancy by using partial application");
console.log("==============================\n\n");
function raiseToPower(exponent, number) {
  return number ** exponent;
}

function partial(func, ...args) {
  return function(...restArgs) {
    return func(...args, ...restArgs);
  };
}

const cubeIt = partial(raiseToPower, 3);
console.log(cubeIt(9));

console.log("\n\nFixing “this” with Function binding");
console.log("==============================\n\n");
function Counter(from, to, divElement) {
  this.currentCount = from;
  this.element = divElement;
  this.incrementCounter = () => {
    this.currentCount -= 1;
    this.element.textContent = this.currentCount;
    if (this.currentCount > to) {
      setTimeout(this.incrementCounter, 1000);
    }
  };
  this.startCounter = () => this.incrementCounter();
}

const counter = new Counter(10, 0, document.getElementById('counterDiv'));
window.onload = () => counter.startCounter();

console.log("\n\nImplement a Recursive Algorithm");
console.log("==============================\n\n");
function factorial(n) {
    if(n===0 || n===1) {
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
var result=factorial(5);
console.log(result);

