// ================= Anonymous and Arrow Functions =================

// function greet() {
//     console.log("Hello");
// }

// greet();

// ===== Function Declaration =====

function add1(a,b) {
    return a+b;
}

// console.log(add1(2,3));

// ===== Function Expression =====

let add2 = function(a,b) {
    return a+b;
}

// console.log(add2(40,7))

// ===== Anonymous Function (no name) =====

// named function 
// function greet() {
//     console.log("Hello");
// }

// greet();

// anonymous function
let greet = function () {
    console.log("Hello I am Anonymous Function")
}

// greet();

/*
    no name
    cannot be used alone
    store functions in a variables
*/

// ===== Arrow Function ======

let multiply1 = function(a,b,c) {
    return a*b*c;
}

// console.log(multiply1(2,3,4))

// Can I make the code shorter ?

// ES6 introduced Arrow Functions

let multiply2 = (a,b,c) => a*b*c;
// console.log("Arrow Function: ", multiply2(2,3,4))

/*
    Writing a Arrow Function:

    1) In arrow function you can skip "{}" and 
        "return" for single line of code

    2) In case of only 1 argument and no arguments
*/

let x1 = () => console.log("Hello World!");
// x1();

// Example:
function print(a) {
    console.log(a);
}

// print("Arrow Function Example");
// print(5)

let x2 = a => console.log(a)
// x2("Hey Everyone")

/* 

        Arrow Function Conversion Activity
    | Function Expression           | Arrow Function |
    | ----------------------------- | -------------- |
    | function(a,b){ return a+b }   | (a,b)=>a+b     |
    | function(name){ return name } | name=>name     |
    | function(){ return "Hi" }     | ()=>"Hi"       |
*/


// Beginner Mistake
let square1 = a => {
    a*a;
}
// console.log(square1(5))

let square2 = num => num*num;
// console.log(square2(5))

// ====== Returning Object =====

// wrong method
let user1 = (name, age) => {
    name,
    age
}
// console.log(user1("Yathe", 25));

// correct method
let user2 = (name, age) => ({
    name,
    age
});
// console.log(user2("Yathe", 25));

// ===== Lexical(this) ======
const obj = {
    name: "JS",
    type: "Web Development",

    normal() {
        console.log(this.name);
    },

    arrow: () => {
        // console.log(this.name);
        console.log(obj.name);
        console.log(obj.type);
    }
    
}

// obj.normal();
// obj.arrow();

// Examples of Arrow Functions

// 1. BASIC ARROW
function greet1(){
    console.log("Normal Function: Hello World");
}
// greet1();

let greet2 = () => "Arrow Function: Hello World"
// console.log(greet2());

// 2. PARAMETERS 
function square(num){
    console.log("Normal Function: ", num * num);
}
// square(5);

let arrowSquare = (num) => num * num;
// console.log("Arrow Function: ", arrowSquare(5));

// 3. MULTI LINE
function checkEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log("Normal Function: ", checkEven(2));

// const arrowCheckEven = (num) => { return (num%2===0) ? true : false }
const arrowCheckEven = (num) => num%2 === 0;
// console.log("Arrow Function: ", arrowCheckEven(5));

// 4. DOM DEMO
function runArrow() {
    let result = `
        greet: ${greet2()} <br/>
        square(5): ${arrowSquare(5)} <br/>
        even(10): ${arrowCheckEven(10)} <br/>
    `;

    document.getElementById("arrowResult").innerHTML = result;
}

// runArrow();

// 5. Function returning an object

function createUser1(name, age) {
    return {name: name, age: age};
}
// console.log("Normal Function: ", createUser1("Yathe", 25));

let createUser2 = (name, age) => ({name: name, age: age});
// console.log("Arrow Function: ", createUser2("Yathe", 25))


// ================= Callbacks (I will call back later!) =================

// function task1(){
//     console.log("Task 1");
// }

// function task2(){
//     console.log("Task 2");
// }

// task1();
// task2();

function task1(callback) {
    console.log("Task 1"); 
    callback();  
}

function task2() {
    console.log("Task 2");
}

task1(task2);

// task2 - give me the function
// task2() - execute the function immediately

/*
    A callback is a function that is passed into another function as an argument to be executed later.

    Callbacks make sure that a function is not going to run before a task is completed 
    but will run right after the task has been completed.

    It is a function passed as an argument
    It is executed after another function completes
    Commonly used in "Asynchronous" programming
*/

// ===== Different Forms of Callbacks ======

// 1. Function Declaration
function greeting1(name) {
    console.log(`Hello ${name}`);
}

function reception(param) {
    let name = "Bharath";
    param(name);
}

reception(greeting1);

// 2. Function Expression 

let greeting1 = function(name) {
    console.log(`Hello ${name}`);
}

function reception(param) {
    let name = "Bharath";
    param(name);
}

reception(greeting);

// 2.a Inline Function Expression
function reception(param) {
    let name = "Bharath";
    param(name);
}

reception(function(name) {
    console.log(`Hello ${name}`);
});

// 3. Arrow Function Callback
function reception(callback) {
    let name = "Arun";
    callback(name);
}

reception(name => {
    console.log(`Hello ${name}`);
})

// reception(name => console.log(`Hello ${name}`));

/*
    Execution Flow:
    1. reception() is called
    2. Arrow function is passed as callback
    3. name is created
    4. callback(name) executes
    5. Arrow function receives "Arun" as name
    6. Prints "Hello Arun"
*/


// ===== Synchronous & Asynchronous ======

// Synchronous Example:
console.log("Synchronous:")

console.log("Start")
console.log("End");

// Asynchronous Example:
console.log("Asynchronous:")

console.log("Start");

setTimeout(() => {
    console.log("Done")
}, 5000)

console.log("End");

// setTimeout( function to perform , time in ms)
/*
    setTimeout() doesn't pause the Js execution. It only schedules
    a callback to run later, while the Js continues executing the
    remaining code immediately
*/

// ===== Calculator Callback ======

let add = calculate(10, 5, (a,b) => a+b); 

let sub = calculate(10, 5, (a,b) => a-b);

let multiply = calculate(10, 5, (a,b) => a*b);

function calculate(a,b, operation) {
    return operation(a,b);
}

console.log(add);
console.log(sub);
console.log(multiply);

// ===== Callback Hell ======
// Nested Callbacks make code hard to read and maintain

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Done");
        })
    }) 
})
