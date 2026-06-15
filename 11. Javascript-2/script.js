// ================= Strings & String Methods =================

// ================= BASIC =================

//              -5-4-3-2-1
// let str1 = " Hello Everyone  ";
          //0123456789.................. 
// console.log("Length of String: " , str1.length);

// console.log("Character at 0th position: " , str1.charAt(4));

// ================= CONCATINATION =================
// let str2 = "JavaScript" + " " + "Strings";
// console.log("Concatinated String: ", str2);

// let str3 = "JavaScript".concat(" ", "Strings ", "Concat Method");
// console.log("Concatinated String: ", str3);

// ================= Slicing the Strings =================
/*
    slice(start, end)     
    substring(start, end)
    substr(start, length)
*/

// let str4 = "Akshay is a Software Engineer";

// console.log(str4.slice(0, 6))
// console.log(str4.slice(0))
// console.log(str4.substring(12, 20))

// console.log(str4.substr(12, 17))

// console.log(str4.slice(-8, -1));
// console.log(str4.slice(-8));

// ================= Converting the Characters =================

// let str5 = "harsha";
// console.log(str5.toUpperCase());

// let str6 = "UZWAL";
// console.log(str6.toLowerCase());

// ================= TRIMMING =================
// let str7 = "    Peddi is released on June 4th     "
// console.log("Original String: ", str7);

// console.log("Trimmed String: ", str7.trim());
// console.log("Trimmed String at starting: ", str7.trimStart());
// console.log("Trimmed String at ending: ", str7.trimEnd());

// ================= REPLACE =================
// let str8 = "15th is a Holiday";

// console.log("Original String: ", str8);

// let new_str8 = str8.replace("15th", "14th");

// console.log("New String: ", new_str8);

// let str9 = "Dogs are very cute animals. I love Dogs very much";

// console.log(str9);

// let new_str9 = str9.replaceAll("Dogs", "Cats");

// console.log(new_str9)

// ================= SEARCH ================= 
// let str10 = "My Portfolio is ready";

// console.log(str10.includes("Portfolio"));

// console.log(str10.indexOf("Portfolio"));

// console.log(str10.search("Portfolio"));

// console.log(str10.match("ready"));


// ================= Strings are Immutable (Unchangeable) =================

// let str1 = "I am Original String";

// console.log(str1.substring(5, 13));

// let str2 = "Hello";

// console.log(str2)

// let str3 = " Everyone";

// str2 = str2 + str3;

// console.log(str2);

//////////////////////////////////////////////////////////////////

// Js Arrays - collection of heterogeneous elements in continuous memory locations 

// ================= BASIC =================

// Creating an Array
               //    0         1             2      3    4
let students = ["Bharath", "SaiNavadeep", "Akash", 123, true];
// console.log("Students Array: ", students);

const fruits = new Array("Apple", "Banana", "Grapes");
// console.log(fruits);

// ================= REFERENCE =================
// Arrays Memory Representation
let x = [1, 2, 3]
let y = x

// console.log(x === y);
// console.log(x === y);

let z = [1, 2, 3];

// console.log(x === z);

// In arrays it will check for memory locations but not for actual values.

// ================= MUTABILITY =================
// Arrays are Mutable
let movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
let films = movies;

// console.log(movies);
// console.log(films);

movies[0] = "Spirit";
// console.log(movies);
// console.log(films);
// Arrays are Mutable


// Accessing Array Elements;
// console.log(movies[1]);

for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

// console.log("for-in: ")
for (let i in movies) {
    // console.log(movies[i]);
}

// console.log("for-of: ")
for (let movie of movies) {
    // console.log(movie);
}

// ================= ARRAY METHODS =================

movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
// console.log(movies)

// console.log(movies.length);

// console.log(movies.at(2));

// console.log(movies.join(' - '));

// movies.pop()
// console.log(movies);

// movies.push('RRR')
// console.log(movies);

// movies.shift();
// console.log(movies);

// movies.unshift('Devara');
// console.log(movies);

telugu_movies = ["Devara", "Coolie", "Kingdom", "Narasimha", "Salaar"];

hinid_movies = ["WAR2", "Pathan", "Tiger", "Dear Zindagi"];

let indian_films = telugu_movies.concat(hinid_movies);
// console.log(indian_films);

let total_films = telugu_movies + ',' + hinid_movies;
// console.log(total_films);
// console.log(typeof (total_films));

movies = ["WAR2", "Coolie", "Kingdom", "Narasimha", "Salaar"];
////////// 0       1           2          3            4

// console.log(movies.slice(1));
// console.log(movies.slice(1, 4)); // [1, 4)

// array_name.splice(position_to_add, no. of elements to be removed, new_element)
// movies.splice(3, 0, 'OG');
// movies.splice(2, 2, 'OG');
// console.log(movies);

// ================= SEARCH Methods =================
movies = ["WAR2", "Coolie", "Kingdom", "Coolie", "Narasimha", "Salaar", "OG"];
/////////   0        1          2         3          4          5        6

// console.log(movies.indexOf('Coolie'));
// console.log(movies.lastIndexOf('Coolie'));
// console.log(movies.includes('OG'));


// =================  ARRAY to STRING & STRING to ARRAY =================

// ==== STRING → ARRAY ( split() ) ======
let statement = "This is our Front-End Internship";
// console.log(statement.split(" "));

// ==== ARRAY → STRING ( join() ) ======
movies = ["WAR2", "Coolie", "Kingdom", "Coolie", "Narasimha", "Salaar", "OG"];
// console.log(movies.join());
// console.log(movies.join(''));
// console.log(movies.join(' '));
// console.log(movies.join(' and '));

// ================= COMMON USE CASES =================

// 1. Convert CSV string to array
let csv = "a,b,c,d";
let arr = csv.split(',');
// console.log(arr);

// 2. Remove extra spaces
let messy = "   JS      is     fun    ";
// console.log(messy);
let clean = messy.trim();
// console.log(clean)
let clean2 = messy.trim().split(/\s+/);
// console.log(clean2)
let clean3 = messy.trim().split(/\s+/).join(" ");
// console.log(clean3)

// 3. Convert Array to sentence
let wordsArr = ["Js", "is", "awesome"];
let result = wordsArr.join(" ");
// console.log(result)

// 4. Revere a String
let string = "JavaScript"
// console.log(string.split(''));
// console.log(string.split('').reverse());
// console.log(string.split('').reverse().join(''));


// ================= Js Objects =================
/*
    Objects are used to store data/methods in key:value pairs
    Objects are used to represent and group related data and behaviour in a structured way.
    Non-Primitive Datatype
    key:value pairs (property)
*/

// ================= Creating Objects =================
/* 3 Ways to create Objects

    1. Using Object Literal
    2. Create Empty Object and then Add Properties
    3. Using new keyword
*/

// 1st Method (Using Object Literal)
const info1 = {
    name: "Yatheswar",
    age: 25,
    email: "yathe@gmail.com"
};

// console.log(info1)

// 2nd Method (Create Empty Object and then Add Properties)
const info2 = {};

// console.log(info2)

// object_name.key = value
info2.name = "Sai Rahul";

// console.log(info2)

info2.age = 23;
info2.email = "yassaswini@gmail.com"

// console.log(info2)

// 3rd Method (Using new keyword)

const info3 = new Object();

// console.log(info3)

info3.name = "SreeRam"
info3.age = 24
info3.email = "sreeram@gmail.com"

// console.log(info3)

// ================= Add Properties =================

// objectName.key = value
info3.eyeColor = "black"
// info3.college-address = "Chennai"

// objectName["key"] = value
info3["college-address"] = "Vel Nagar";
info3["occupation"] = "Designer"
info3["Salary"] = 50000

// console.log("Info 3: ", info3);

// ================= Modify Objects =================

info3.occupation = "Editor"
info3["Salary"] = 60000

// console.log(info3)

// ================= Accessing Objects =================

// console.log(info3.name)
// console.log(info3["occupation"])

// ================= LOOP OBJECT =================
// for(let key in info3){
//     console.log(key, info3[key]);
// }

// ================= KEYS & VALUES =================
// to get "keys" of an Object : Object.keys(obj_name);
// console.log(Object.keys(info3));

// to get "values" of an Object : Object.values(obj_name);
// console.log(Object.values(info3));

// ================= Delete in Objects =================

delete info3.eyeColor; // delete entire property

delete info3["age"];

// console.log(info3)

// info3 = null;

// We cannot delete entire object directly but we can assign the object with null/undefined values.

let info4 = {
    name: "Harsha",
    age: 21,
    designation: "student"
};

// console.log(info4);

info4 = null;

// console.log(info4)

// ================= CHECK PROPERTY has Own Property =================

// hasOwnProperty - it is a method to check if the property is present or not

// console.log("Info 3: ", info3);

// console.log(info3.hasOwnProperty("name"));

// console.log(info3.hasOwnProperty("address"));

// ================= Object Keys =================

/*
    Js Object keys can't be Numbers
                            Boolean
                            Null
                            Undefined
*/

const info5 = {
    name: "Bharath",
    21: 21,
    designation: "student",
    college: "Veltech",
    true: null
};

// console.log(info5)

// They are converted to Strings

/*
{
    "name": "Bharath",
    "21": 21,
    "designation": "student",
    "college": "Veltech"
    "true":"null"
};
*/

// ================= Object Methods =================

/* Js Method is a function that is stored as a "property"
    of an object,
    It is used to define the behavior or action that 
    the object can perform
*/

const name = {
    fname: "Yatheswar",
    lname: "Ethalapaka",

    fullName1: function () {
        // return fname + " " + lname;
        return this.fname + " " + this.lname;
    },

    fullName2: function (firstName, lastName) {
        return firstName + " " + lastName;
    }

};

// console.log(name.fullName1());

// console.log(name.fullName2("Yathe", "Eswar"))

// ================= Nested Objects =================

/*  Creation

    const obj1 = {
    
        key1 : value1,
        key2 : value2,

        obj2 : {

            key3: value3,
            key4: value4
        
        },

        key5 : value,

        obj3 : {

            key6: value6
        },

        key7: value7
    }

*/

const student1 = {

    name: "Krishna",
    age: 21,

    student2: {
        name: "Madhusudhan",
        age: 21,

        student3: {
            name: "Lokesh",
            age: 21
        }
    },

    college: "Veltech"

}

// console.log(student1);

/* Accessing

    obj1["key"],

    obj1["obj2"]["key"],

    obj1.obj2.key;

*/

// console.log(student1.name);

// console.log(student1.student2.name);

// console.log(student1["student2"]["student3"]["age"]);

// The commonality of array & object are "key:value" pairs.

////////// "const" in Objects /////////////////

/*
    "const" keywords doesn't apply to objects.
    Because objects are "mutable".

    It only prevents the "reassignment";
*/


// =================== PASS BY VALUE ====================
/*
    A copy of the value is created
    Primitive Data Types
*/
// console.log("Pass by Value: ");

// let a = 10;
// console.log("a: ", a);

// let b = a;
// console.log("b: ", b);

// console.log("After:")
// b = 20;
// console.log("b: ", b);
// console.log("a: ", a);

// =================== PASS BY REFERENCE ====================
/*
    A reference (memory address) is shared
    Non-Primitive Data Types
*/
// console.log("Pass by Reference: ");

// let obj1 = { value: 10 };
// console.log("Obj 1:", obj1)

// let obj2 = obj1;
// console.log("Obj 2:", obj2)

// console.log("After: ")

// obj2.value = 20;

// console.log("Obj 2: ", obj2);
// console.log("Obj 1: ", obj1);

// =================== MUTATION BUG ====================

let user = { name: "Yathe" };

console.log(user);

function change(obj) {
    obj.name = "Changed";
}

change(user);

console.log(user);

// =================== FIX USING SPREAD ====================

console.log("Spread Operator");

function fixMutation() {

    let original = { name: "Yathe" };

    let copy = {...original} // spread operator performs shallow copy

    copy.name = "Updated";

    console.log("Original Name: ", original.name);
    console.log("Updated Name: ", copy.name);
}

fixMutation();

// =================== DEEP COPY (basic) ====================

console.log("Deep Copy: ");

let obj = { 
    
    a: 1, 

    nested : {
        b: 2
    }
};

console.log("Original obj: ", obj);

let copy = JSON.parse(JSON.stringify(obj));

console.log("Copied obj: ", copy);

copy.nested.b = 100;

console.log("Value of b in Original : ", obj.nested.b);

console.log("Value of b in Copied : ", copy.nested.b);