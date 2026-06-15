// Js Outputs
/*
    1) console.log
    2) alert()
    3) document.write()
    4) .innerHTML
*/

// console.log("Hello Everyone, This is console tab");
// alert("This is alert");
// document.write("Hello, I am document.write()");
// document.getElementById("hello").innerHTML = "Hello Everyone";

// Js Identifiers
/*
    1) A-Z, a-z
    2) $
    3) _
    4) It can contain numbers but shouldn't start with numbers
*/

// Name1 = "Sumanth"
// console.log(Name1);

// $Name2 = "Uday Kiran"
// console.log($Name2);

// _Name3 = "Karthikesh"
// console.log(_Name3);

// 4Name

// Js Variables
/*
    1) var
    2) let
    3) const
*/

var num1 = 1;
var num2 = 2;

let num3 = 3;
let num4 = 4;

const pi = 3.14;

// console.log(num1, num2, num3, num4, pi);

// redeclaration & re-assignment

// 1. var
// var name1 = "Vajresh";
// console.log(name1);

// var name1 = "Vidya Sagar";
// console.log(name1);

// 2. let
// let name2 = "Naga Sai"
// console.log(name2);

// name2 = "Bharath";
// console.log(name2);

// 3. const
// const piExample = 3.14
// console.log(piExample);

/*
        re-declaration   re-assignment
var        yes               yes
let         no               yes
const       no               no
*/

/*
    Scope of a Variable:
    -> 1) Functional / Global
    -> 2) Block Scope
*/

// let n1 = 10;
// console.log("let n2:", n1);
// {
    // let n1 = 11;
    // console.log("let n2:", n1);
// }
// console.log("let n2:", n1);

// var n2 = 10;
// console.log("var n2:", n2);
// {
    // var n2 = 15;
    // console.log("var n2:", n2);
// }
// console.log("var n2:", n2);


/***************** Js Data Types *****************/ 
/*
    A) Primitive Data Types
    1) String  - single word, group of words
    2) Number  -  Js has no double, float
    3) BigInt  - for large range of numbers
    4) Boolean - true/false
    5) Undefined - variable is declared but not assigned with any value
    6) NULL   - variable is assigned with NULL value

    B) Non-Primitive Data Types
    7) Object
        An Object
        An Array
        A Date
        Functions

*/

// ========= PRIMITIVE DATA TYPES =========
let stringVar = "JavaScript";
let numberVar = 10000;
let booleanVar = true;

// BigInt (must use 'n')
let bigintVar = 123456709876541234567n

let unDefinedVar;
let nullVar = null;

// ======= typeof =======
// console.log(typeof(stringVar));
// console.log(typeof(numberVar));
// console.log(typeof(booleanVar));
// console.log(typeof(bigintVar));
// console.log(typeof(unDefinedVar));
// console.log(typeof(nullVar));


// ======== NON-PRIMITIVE DATA TYPES =========
let obj = {name: 'Js', number: 10};
let arr = [1, 2, 3, "Sumanth", 'Hemanth'];
let func = function () {};
let date = new Date();  // built-in constructor function (class-like object)

// console.log(obj);
// console.log(typeof(obj));

// console.log(arr);
// console.log(typeof(arr));

// console.log(func);
// console.log(typeof(func));

// console.log(date);
// console.log(typeof(date));

/***************** Js Operators *****************/  
/*
    1) Airthmetic - (+, -, *, /, %, **)
    2) Assignment - (=, +=, -=, *=, /=, %=, **=) 
    3) Comparison - (<, >, <=, >=, ==, !=, ===, !==)
    4) Logical - ( &&, ||, !)
    5) Bitwise - (&, |, ~, ^, <<, >>, >>>)
    6) Typeof - (typeof(), instanceof())
    7) Ternary - (? :)
*/

var n1 = 2
var n2 = 5
// console.log(n1 ** n2)

// Operator Precedence - BEDMRAS
// console.log(5 + 4 - 2 * 7 / (8 % 3) ** 3)

// 5 + 4 - 2 * 7 / (2 ** 3)
// 5 + 4 - 2 * (7 / 8)
// 5 + 4 - (2 * 0.875)
// (5 + 4) - 1.75
// 9 - 1.75
// 7.25

var n1 = n1 + 10;
n1 += 10

// type coersion: implicit conversion of datatype done by '=='

x3 = 100
x4 = "100"

// console.log(x3 == x4)
// console.log(x3 === x4)

// console.log(x3 != x4)
// console.log(x3 !== x4)

num = 1000
if(num === 1000) {
    // console.log("Yes");
}
else {
    // console.log("No");
}

// (num === 1000) ? console.log("Yes") : console.log("No");


/***************** Js Type Conversions *****************/
// Type Conversion - change of one datatype into another
/*
    1. Implicit
    2. Explicit
*/

// ======== Implicit Conversion =======

// let res1 = 51 + 81
// console.log(res1)

// let res2 = "Hello " + "Everyone";
// console.log(res2)

// let res3 = 51 + 81 + "JavaScript";
// console.log(res3)

/*
    51 + 81 + "JavaScript";
    132 (number) + "JavaScript" (string)
    "132" (string) + "JavaScript" (string)
    "132JavaScript" (string)
*/

// let res4 = 50 + 30 + "JavaScript" + 20 + 100
// console.log(res4);

/*
    50(number) + 30 (number) + "JavaScript" + 20 + 100
    80 (number) + "JavaScript" (string) + 20 + 100
    "80JavaScript" (string) + 20 (number) + 100 (number)
    "80JavaScript20" (string) + 100 (number)
    "80JavaScript20100"
*/

// let res5 = "5" - 2;  // (string -> number)
// console.log(res5);

// let res6 = "5" + 2;  // (number -> string)
// console.log(res6);

// let res7 = null + 1;
// console.log(res7);

// let res8 = undefined - 1;
// console.log(res8);

// ======== Explicit Conversion =======
// let res9 = 123;
// console.log(res9, typeof(res9));

// let res10 = String(res9);
// console.log(res9, typeof(res10));

// let res11 = "JavaScript";
// console.log(res11, typeof(res11));

// let res12 = Number(res11);
// console.log(res12, typeof(res12))

// console.log(Boolean(0));
// console.log(Boolean(-1));
// console.log(Boolean(""));
// console.log(Boolean("Hello"));

/***************** Js Conditional Statements *****************/

// Conditional Statements
/*
    1) if
    2) if-else
    3) if-elseif
    4) switch
*/

let a = 100;

if (a === 100) {
    // console.log("Yes");
}
else {
    console.log("No");
}

if (a > 100) {
    console.log("a is greater than 100");
}
else if (a < 100) {
    console.log("a is less than 100");
}
else {
    // console.log("a is 100");
}

switch (1) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "No day";
}

// console.log(day)

/***************** Js Loops *****************/
// Loops
/*
    1) for
    2) while
    3) do-while
    4) for-in  - used for keys (objects, array indexes)
    5) for-of  - used for values (arrays, strings)
*/

for (let i = 0; i < 10; i+=2) {
    // console.log(i);
}

// console.log("While Loop:")
res = 0;
while (res < 10) {
    // console.log(res);
    res += 1;
}

// console.log("do-while Loop:")
ans = 10
do {
    // console.log(ans)
    ans -= 1
} while (ans > 0);


// console.log("for-in loop:")
let arr1 = ["a", "b", "c", "d", "e"];
for (let x in arr1) {
    // console.log(x, arr1[x]);
}
/*
    0, a1[0]
    1, a1[1]
    2, a1[2]
*/

let obj1 = {
    name: 'Yatheswar',
    age: 25
}
for(let key in obj1) {
    // console.log(key);
}

// console.log("for-of loop:")
let arr2 = ["a", "b", "c", "d", "e"];
for (let x of arr2) {
    // console.log(x);
}

let str1 = "JavaScript-React";
for(let char of str1) {
    // console.log(char);
}

// console.log(str1.split("").sort().join(""))


/***************** Js Functions *****************/
/* 
    Functions are a block of code to perform a specific task
    which can be reusable.

    Syntax:

    // function_defintion
    function function_name (parameters){

        .... code ......

        return statement;
    
    }

    // function_call
    function_name(parameters);
*/

/*
    Two types of Functions:
    1. Parameterized 
    2. Non-Parameterized

*/

// function hello() {
//     console.log("Hello Everyone");

//     return "I am return function";
// }

// hello();

// var ans = hello();
// console.log(ans);

// console.log(hello());

// function add(num1, num2) {
//     return num1 * num2;
// }

// console.log(add(5,8));


/*  
    Types of declaring functions
    1. Function Declaration
    2. Function Expression
    3. Arrow Function
*/

// 1. Function Declaration
function add1(a,b) {
    return a + b;
}
console.log(add1(9,10));

// 2. Function Expression
const add2 = function(a,b) {
    return a + b;
}
console.log(add2(2,3))

// 3. Arrow Functions - shorter syntax
const add3 = (a,b) => a + b;
console.log(add3(15, 17));

const newHello = () => console.log("Hello World");
newHello();

// function r2(a) {
//     console.log(a)
// }

const r2 = (a) => console.log(a);
r2(3);
