// ==================== HOISTING ====================
/* 
    JavaScript moves declarations to the top of their scope before execution
    "variables" and "function declarations" are moved to top of their scope before code execution.

    JavaScript Execution:

    JavaScript runs in 2 phases:

        Phase 1
            Memory Creation Phase
            JavaScript scans entire code.
            Allocates memory.

        Phase 2
            Execution Phase
            Code executes line by line.
*/

// Example 1
a = 10;
// console.log(a);
var a;

// Example 2
var b;
// console.log(b);
b = 10;

// Example 3
c = 10;
// console.log(c)
// let c;

// ==== TDZ (Temporal Dead Zone) ====
/*
    Js already knows about c.
    But access is blocked.
    This blocked period is called - TDZ
*/

// ==== Function Hoisting ====

// Example 1
// greet();

function greet() {
    console.log("Hello");
}

// Example 2
// greet();

// const greet = function() {
//     console.log("Hello");
// };

// ==================== SCOPE ====================

/* "How does JavaScript decide which variables a piece of code can access?"

        Types 
    ______|______
    |           |
  Global       Local 
                |-> Function
                |-> Block (var is used as global)

*/

// Global Scope
let collegeName = "Veltech College";

function showCollege() {
    console.log(collegeName);
}

// showCollege();

// Function Scope
function classroom() {
    let student = "Rahul";

    console.log(student);
}

// classroom();
// console.log(student);

// Block Scope
if (true) {
    let age = 20;
}
// console.log(age);

if (true) {
    var age = 20;
}
// console.log(age);

// ==== Lexical Scope ====

// How does JavaScript find a variable?

/*
    Ability for an inner scope to access the variable from outer scope i.e. inner scope is lexically bound to the outer scope.
    Lexical scope means a function can access variables from its outer scope based on where the function is defined in the code, not where it is executed.
    Inner function can access variables from outer scope
    Scope depends on where function is defined, not executed  
*/

// Example 1
let city = "Vizag";

function parent() {
    let name = "Yathe";

    function child() {
        console.log(city);
        console.log(name);
    }

    child();
}

// parent();

// Example 2
let num = 10;

function first() {
    let num = 20;

    function second() {
        console.log(num);
    }

    second();
}

// first();
// Nearest Scope always wins


// ==================== Closures ====================

// Suppose you want a variable that nobody can modify directly.

// Example 
function outer() {

   let name = "Yathe";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();

// result();

/*
    Closures (Function + Lexical Environment)

    If a function is created inside another function, it retains access to scope of that outer function 
        even after that outer function returns, because the outer function is in the lexical scope of the function.
    If in a inner function if the "child function is returned" then it is a CLOSURE.
    A function remembers variables from its outer scope
    Works even after outer function finishes execution
*/


// Counter Example
function createCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Login Tracker
function loginTracker() {

    let attempt = 0;

    return function() {
        attempt++;
        console.log(`Attempt ${attempt}`);
    };
}

const login = loginTracker();

login();
login();
login();

// Many frameworks and libraries internally use closures for state management