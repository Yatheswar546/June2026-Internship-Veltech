// ================= Anonymous and Arrow Functions =================

function greet() {
    console.log("Hello");
}

greet();

// ===== Function Declaration =====

function add1(a,b) {
    return a+b;
}

console.log(add1(2,3));

// ===== Function Expression =====

let add2 = function(a,b) {
    return a+b;
}

console.log(add2(40,7))

// ===== Anonymous Function (no name) =====

// named function 
function greet() {
    console.log("Hello");
}

greet();

// anonymous function
let greet = function () {
    console.log("Hello I am Anonymous Function")
}

greet();

/*
    no name
    cannot be used alone
    store functions in a variables
*/

// ===== Arrow Function ======

let multiply1 = function(a,b,c) {
    return a*b*c;
}

console.log(multiply1(2,3,4))

// Can I make the code shorter ?

// ES6 introduced Arrow Functions

let multiply2 = (a,b,c) => a*b*c;
console.log("Arrow Function: ", multiply2(2,3,4))

/*
    Writing a Arrow Function:

    1) In arrow function you can skip "{}" and 
        "return" for single line of code

    2) In case of only 1 argument and no arguments
*/

let x1 = () => console.log("Hello World!");
x1();

// Example:
function print(a) {
    console.log(a);
}

print("Arrow Function Example");
print(5)

let x2 = a => console.log(a)
x2("Hey Everyone")

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
console.log(square1(5))

let square2 = num => num*num;
console.log(square2(5))

// ====== Returning Object =====

// wrong method
let user1 = (name, age) => {
    name,
    age
}
console.log(user1("Yathe", 25));

// correct method
let user2 = (name, age) => ({
    name,
    age
});
console.log(user2("Yathe", 25));

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

obj.normal();
obj.arrow();

// Examples of Arrow Functions

// 1. BASIC ARROW
function greet1(){
    console.log("Normal Function: Hello World");
}
greet1();

let greet2 = () => "Arrow Function: Hello World"
console.log(greet2());

// 2. PARAMETERS 
function square(num){
    console.log("Normal Function: ", num * num);
}
square(5);

let arrowSquare = (num) => num * num;
console.log("Arrow Function: ", arrowSquare(5));

// 3. MULTI LINE
function checkEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log("Normal Function: ", checkEven(2));

const arrowCheckEven = (num) => { return (num%2===0) ? true : false }
const arrowCheckEven = (num) => num%2 === 0;
console.log("Arrow Function: ", arrowCheckEven(5));

// 4. Function returning an object

function createUser1(name, age) {
    return {name: name, age: age};
}
console.log("Normal Function: ", createUser1("Yathe", 25));

let createUser2 = (name, age) => ({name: name, age: age});
console.log("Arrow Function: ", createUser2("Yathe", 25))

// ================= Callbacks (I will call back later!) =================

function task1(){
    console.log("Task 1");
}

function task2(){
    console.log("Task 2");
}

task1();
task2();

// Callback Approach
console.log("Callback Approach")

function task1(callback) {  
    console.log("Task 1");
    callback(); 
}

function task2() {
    console.log("Task 2");
}

function task3() {
    console.log("Task 3");
}

// task1(task3);

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

// 1. Callback with Function Declaration
function greeting1(name) {
    console.log(`Hello, ${name}`);
}

function reception1(param) {
    let name = "I am Callback with Function Declaration";
    param(name);
}

reception1(greeting1);

// 2. Callback with Function Expression 

let greeting2 = function(name) {
    console.log(`Hello, ${name}`);
}

function reception2(param) {
    let name = "I am Callback with Function Expression";
    param(name);
}

reception2(greeting2);

// 2.a Inline Callback with Function Expression
function reception2a(param) {
    let name = "I am Inline Callback with Function Expression";
    param(name);
}

reception2a(function(name) {
    console.log(`Hello, ${name}`);
});

// 3. Callback with Arrow Function 
let greeting3 = (name) => console.log(`Hello, ${name}`);

function reception3(callback) {
    let name = "I am Callback with Arrow Function";
    callback(name);
}

reception3(greeting3);

/*
    Execution Flow:
    1. reception() is called
    2. Arrow function is passed as callback
    3. name is created
    4. callback(name) executes
    5. Arrow function receives name
    6. Prints "Hello ${name}"
*/

// 3.a Inline Callback with Arrow Function
function reception3a(callback) {
    let name = "I am Inline Callback with Arrow Function";
    callback(name);
}

reception3a(name => {
    console.log(`Hello, ${name}`);
})

reception3a(name => console.log(`Hello ${name}`));

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

// ================= Array Iteration Callback Methods =================

// Array iteration methods allow us to process elements using callbacks.

// forEach()
/*
    Runs a function at once for each element
    "Go through each element and does some operation with it"
    Does NOT return anything
    forEach() accepts only one argument i.e. callback function
*/

let arr1 = [1,2,3,4,5,6,7,8,9,10]

// Example 1:
arr1.forEach((ele) => {console.log(ele)});

// Example 2:
arr1.forEach((ele) => {ele%2===0 ? console.log(ele) : null})
arr1.forEach( (ele) => {
    if(ele%2===0) {
        console.log(ele)
    }
})

/*
    The callback function will accept 3 arguments (element, index, array)
    The arguments should be variables not actual values

    arr.forEach( (element, index, array) => {} );

    NOTE: By default index start at "0". 'element' is MANDATORY, 'index' and 'array' are OPTIONAL
*/

// Example 3:
arr1.forEach((ele, index, arr1) => {
    console.log(ele, index)
});

// Example 4:
arr1.forEach( (a,b,c) => console.log(a,b,c))

// Example 5: WRONG CODE
arr1.forEach( () => console.log(a))

/*
    NOTE: forEach() won't return anything. It just prints the data
*/

// Example 6:
let result = arr1.forEach((ele) => {ele%2===0 ? console.log(ele) : null})

console.log(result); // undefined

// ===== Array Callback Methods =====
/*
    These functions iterate on each element of the array at once and performs an operation and returns the value.

    * find()
    * sort()
    * map()
    * filter()
    * reduce()
*/

// find()
/*
    Returns first matching element in the array that satisfies the condition mentioned in the callback function.
*/

let findArr = ["JavaScript", "React", "MERN", "Hemanth", "Sumanth", "Rahul", "Uday"];

// General Approach
for(let word of findArr) {
    if(word == "MERN") {
        console.log(word);
    }
}

// find() example 1:
let finResult = findArr.find( (ele) => (ele === "MERN"));
console.log(finResult);

// find() example 2:
let arr2 = [1,2,3,4,5,6,7]
let evenResult1  = arr2.find((ele) => {return ele%2===0})
console.log(evenResult1);

let evenResult2  = arr2.find((ele) => ele%2===0)
console.log(evenResult2);

/*  
    NOTE: 
    some() is another method that works same as find()

    => But some() returns true/false "boolean" values but find() returns the element

    Example:
    const numbers = [10, 20, 30, 40, 50];
    const result = numbers.some(num => num > 25);
    console.log(result);

    Output: true

    If you want if the element exists (yes or no) you must use some()
    But if you want that element to print or store in another variable you must use find()
*/

// sort()
/*
    sort elements of an array in-place (modifies)
    returns sorted array
    Default: string sort
*/

// sort example 1:
let sortArr1 = ["JavaScript", "React", "MERN", "Hemanth", "Sumanth", "Rahul", "Uday"];
console.log(sortArr1.sort());

// sort example 2:
let sortArr2 = [10, 25, 1, 2, 3, 34, 26, 45, 6, 76]
console.log(sortArr2.sort());

/*
    sort() tires to convert the array elements to strings first 
    and sorts lexicographically (dictionary) order.

    NOTE: for numebers it doesn't sort as expected because numbers are considered as strings
*/

/*
    Sort with comparator function:
    arr.sort((a,b) => a-b)  // ascending
    arr.sort((a,b) => b-a)  // descending
*/

// sort Example 3:
console.log("Comparator Function: ", sortArr2.sort((a,b) => a-b));
console.log("Comparator Function: ", sortArr2.sort((a,b) => b-a));

// map()
/*
    Transforms array in a cleaner way
    Applies a function to each one of the elements
    Returns new array
*/

let mapArr = [1,2,3,4,5];

let mapResult = mapArr.map( (ele) => ele * 2)
console.log("Result Array:", mapResult);
console.log("Original Array: ", mapArr);

/*
    NOTE: 
        map() is superior to forEach()
        map() is capable of creating "new array"
        performs operations and push elements into new array
        returns new array 
*/

// filter()
/*
    Returns all matching elements
    Same as find() but returns all elements that satisfies the given condition
*/

let filterArr = ["JavaScript", "React", "MERN", "Hemanth", "Sumanth", "React", "Rahul", "Uday", "React"];

// filter example 1
let filterResult1 = filterArr.filter( (ele) => (ele) === "React")
console.log(filterResult1)

// filter example 2
let filterResult2 = filterArr.filter( (ele) => (ele.toLowerCase()) === "mern")
console.log(filterResult2)

/*

    NOTE: 
    every() is another method that works same as filter()

    => But every() returns true/false "boolean" values but filter() returns all the elements

    Example:
    const numbers = [10, 20, 30, 40, 50];
    const result = numbers.every(num => num > 25);
    console.log(result);

    Output: false

    In the above example, we are checking if atleast one student as scored above 25.

    So, if you check if atleast one element exists the condition (yes or no) you must use every()
    But if you want all the elements to print or store in another variable you must use filter()

*/

// reduce()
/*
    Reduces an array to single value
    It does not change the original array
    Real-Life example is "cart-page"

    Syntax:
    array.reduce( accumulatorFn, initialValue);
    accumulatorFn = ( accumulator, currentValue, index, currentArray) => { reducerLogic };
    
    arr.reduce((total, ele) => total + ele, 0);

    accumulator (required):
    It accumulates callback's return value.
    It stores all the values returned by callback.
    Can be a number, array, object.
    
    currentValue (required):
    array element i.e. array[i]

    index (optional):
    current index of item

    currentArray (optional):
    the iterating array

    initialValue (optional):
    A value to use as first argument to first call of the callback.
*/  

// reduce example 1:
let reduceArr1 = [1000, 1200, 800, 1358];
let reduceResult1 = reduceArr1.reduce( (totalPrice, ele) => totalPrice += ele);
console.log(reduceResult1)

// reduce example 2 (with intial value):
let reduceArr2 = ["JavaScript", "React", "MERN", "Hemanth", "Sumanth", "React", "Rahul", "Uday", "React"];
let reduceResult2 = reduceArr2.reduce( (totalLength, ele) => totalLength += ele.length, 0);
console.log(reduceResult2)

// Key Differences
/*
    | Method  | Returns      | Use          |
    | ------- | ------------ | ------------ |
    | forEach | undefined    | side effects |
    | map     | new array    | transform    |
    | filter  | new array    | condition    |
    | find    | single value | first match  |
    | reduce  | single value | aggregation  |
*/

// Important Notes
/*
    map() returns new array
    filter() returns subset
    sort() modifies original
    reduce() is most powerful
*/

// Common Mistakes
/*
    Using forEach instead of map
    Forgetting return in map
    Using sort without comparator
    Misusing reduce
*/