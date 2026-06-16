// ================= Destructuring =================
/*
    Destructuring is a way to extract values from arrays and objects into variables in a single line.

    Instead of manually accessing properties using dot notation or index positions, destructuring makes the code shorter and easier to read.
    
    It makes code:
        shorter
        cleaner
        easier to read
*/

// ========= Object Destructuring =========
// Unpack the properties (key-value pairs) into individual variables.

const book = {
    title: "when breath becomes air", 
    author: "Paul Kalanithi",
    year: 2012,
    genre: "autobiography"
}

console.log(book.title);
console.log(book["year"]);

let { author, title, genre, year } = book;

console.log(title);
console.log(year)

// Rename Variables

let { author: x1, title: x2, genre: x3, year: x4 } = book;

console.log(x3);
console.log(x1);

// ========= Array Destructuring =========
// Unpack elements into variables.

let arr = ["sun", "mon", "tue", "wed"];

let [a, b, c, d] = arr;
console.log(a, b)

let [a, b] = arr;
console.log(a, b)

// Skip Values
let [ , , x, y] = arr;
console.log(x, y)

// =========== NOTE =============
/*
    Object -> Order is not important
    Array  -> Order is v.v. important
*/

// ========= Nested Destructuring =========
// Unpack elements into variables.

// Objects
const user = {
    name: "Yatheswar",
    address: {
        city: "Vizag",
        pincode: 530008
    }
};

const { name, address: {city} } = user
console.log(name, city)

// ALternative way
const {address} = user;
const {city, pincode} = address
console.log(city, pincode)

// Arrays
const arr = [ 1, [2,3] ]
const [ x, [y, z] ] = arr;
console.log(x, y, z)

// =========🔹 Benefits =========
/* 
    Cleaner syntax
    Less repetitive code
    Better readability
    Useful in APIs and React
    Makes function parameters cleaner
    Avoids temporary variables
*/ 

// =========🔹 Common Mistakes =========
/*
    Confusing object vs array syntax
    Forgetting variable names must match keys
    Not handling undefined values
    Overusing nested destructuring
*/


// ================= Spread & Rest Operators =================

/*
    The ... operator in JavaScript is used in two ways:

        1) Spread Operator
        2) Rest Operator
*/

// ========= Spread Operator =========

/*
    Used to expand elements of an array or object.

    => It helps create copies and avoid mutation issues. 
    => In Pass by Reference we can't create a copy for arrays and objects but we need to original data. In such cases, we use Spread Operator (...)

*/

// ========= Shallow Copy & Deep Copy =========

/*
    In JavaScript, copying an object or array can be done in two ways:
*/

// ====== 1. Shallow Copy =======
/*
    A shallow copy creates a new object, but nested objects/arrays are still shared by reference.
*/

const original = {
    name : "Sai Rahul",
    address: {
        city: "Vizianagaram"
    },
    email: "sairahul@gmail.com"
};

const shallowCopy = {...original};

console.log("Original: ", original);
console.log("Shallow Copy: ", shallowCopy);

shallowCopy.name = "Mike";
console.log("Original: ", original);
console.log("Shallow Copy: ", shallowCopy);

shallowCopy.address.city = "Vizag";
console.log("Original: ", original);
console.log("Shallow Copy: ", shallowCopy);

shallowCopy.email = "rahul@gmail.com"
console.log("Original: ", original);
console.log("Shallow Copy: ", shallowCopy);

// ====== 2. Deep Copy =======
/*
    A deep copy creates a completely independent copy, including all nested objects and arrays.
*/

const original = {
    name : "Sai Rahul",
    address: {
        city: "Vizianagaram"
    },
    email: "sairahul@gmail.com"
}; 

const deepCopy = JSON.parse(JSON.stringify(original));
console.log("Original: ", original);
console.log("Deep Copy: ", deepCopy);

deepCopy.address.city = "Vizag";
console.log("Original: ", original);
console.log("Deep Copy: ", deepCopy);

// ========= Spread Operator Example =========
let arr = [1,2,3,4,5, [6,7,8,9]]
let copy = [...arr];

copy[0] = 10;

console.log(arr);

console.log(copy)
copy[5][0] = 10;


let arr1 = [1,2,3]
let arr2 = [4,5,6]

let merged = [...arr1, ...arr2]
console.log(merged);

// ========= Rest Operator =========
// Used to collect multiple values into a single array. Mainly used in function parameters.

let fruits = ["apple", "banana", "orange", "dragonfruit", "mango", "strawberry"];

const [first, ...rest] = fruits;

console.log(first);
console.log(rest);

let numbers = [1,2,3,4,5,6]

function sum(...numbers) {
    return numbers;
}

console.log(sum(...numbers))

// =========🔹 Common Mistakes =========
/*
    Confusing spread and rest
    Assuming spread creates deep copy
    Forgetting spread is shallow
    Misplacing rest parameter
*/

// ================= Numbers & Math =================

/*
    JavaScript provides built-in support for numbers and mathematical operations.

        1) Special Numbers
        2) Floating Point Behavior
        3) Math Functions
*/

// ========= Special Numbers =========
/*  
    Infinity
    -Infinity
    -0
    NaN - Not a Number
*/
console.log(100 / 0);
console.log(-100 / 0);
console.log( 0 / -20);
console.log("Math" - 100)

console.log(typeof(Infinity))
console.log(typeof(-Infinity))
console.log(typeof(-0))
console.log(typeof(NaN))

// ========= Falsy (or) Truthy Values =========
/*
    Falsy Values  - false, null, 0, -0, undefined, NaN, ""
    Truthy Values - other than falsy
*/

if("") {
    console.log(3);
}
else {
    console.log(2)
}

if("Hemanth") {
    console.log(3);
}
else {
    console.log(2)
}

// ========= Floating Point Behavior =========
/*
    => Humans use the decimal system (base 10)
    
    => Computers use the binary system (base 2) - 0 , 1
        So, some decimal numbers cannot be represented exactly in binary.
        Eg: 1/3 = 0.3333333333333 and 0.1  

    => So JavaScript stores the closest possible approximation.     

    JavaScript uses IEEE 754:
        All regular numbers in JavaScript are stored as "Number"
        Internally they use the IEEE 754 double-precision floating-point format.

        Eg: let x = 0.1 (actual stored data --> 0.1000000000000055555)
            let x = 0.2 (actual stored data --> 0.200000000000110001)
*/      

console.log(2 + 3)

// 0.1 + 0.2 = 0.3 (Expected)

console.log(0.1 + 0.2)
console.log(0.1 + 0.3)

console.log(0.1 + 0.2 === 0.3)

// NOTE: Never compare floating-point numbers directly

if(0.1 + 0.2 === 0.3) {
    console.log("Equal");
}

// Better Approach

const epsilon = 0.000000000001

if(Math.abs((0.1 + 0.2) - 0.3) < epsilon) {
    console.log("Almost Equal")
}

// In real-world this is how many scientific and financial applications handle floating-point comparisons

// ========= Math Functions =========

/*
    Math.trunc() - returns only integer part
    Math.round() - returns round-off values
    Math.floor() - return the lower round-off value
    Math.ceil()  - return the upper round-off value

    Math.max() - returns the maximum value
    Math.min() - returns the minimum value 

    Math.pow(base, power) - returns the power of a number

    Math.PI = 3.141592653589793

    NOTE: `trunc()` and `floor()` works differently with -ve numbers
*/

console.log(0.1 + 0.2)
console.log(Math.round(0.1 + 0.3))
console.log(Math.floor(0.1 + 0.3))
console.log(Math.ceil(0.1 + 0.3))

console.log(Math.trunc(5.345678))
console.log(Math.floor(5.345678))

console.log(Math.trunc(-3.2345));
console.log(Math.floor(-3.2345));

// ================= Template Literals =================

/*
    Template literals are strings enclosed in backticks that allow embedded expressions using ${}, 
    support multi-line strings, and provide cleaner string interpolation compared to traditional concatenation.
        => Use backticks ` ` instead of '' or "".
        => Support variables and expressions
        => Template literals are a modern way to work with strings in JavaScript.
    
    They mainly help with:

        => embedding variables
        => multi-line strings
        => string formatting
        => expressions inside strings

    KeyPoint: ${ } allows you to insert variables or expressions.
*/

// Example 1
let name = "Hemanth"
let age = 20

// Hi all. My name is Hemanth and my age 20.

// Old Way
let ans = "Hi all. My name is " + name + " and my age is " + age;
console.log(ans)

// New Way
let newAns = `Hi all. My name is ${name} and my age is ${age}`;
console.log(newAns);

// Example 2
let a = 10, b = 20;
console.log(`Sum of a and b is ${a+b}`);

// Example 3: using functions
function square(n) {
    return n * n;
}

console.log(`Square of 5 is ${square(5)}`);

// Example 4: multi-line strings
let content = `line 1
line 2
line 3 
`;

console.log(content)

// Example 5: Conditional Statements

const isLoggedIn = true;

const message = ` User is ${isLoggedIn ? "Online" : "Offline"} `;
console.log(message);

/*
if(age > 25) {
    console.log("Yes")
}
else {
    console.log("No")
}

console.log((age > 25) ? "yes" : "no");
*/

// Example 6: Nested Literals
let username = "Uday"
let skills = ["HTML", "CSS", "Js"]

const output = `
    Name: ${username}
    Skills: ${skills.join(",")}
`
console.log(output)

// Example 7: Using in DOM
const user = {
    name: 'Bhargav',
    age: 20
}

const card = `
    <div class='card'>
       <h2>${user.name}</h2>
       <h2>${user.age}</h2>
    </div>
`
document.getElementById("user").innerHTML = card;