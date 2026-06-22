let myJson1 = [
    {
        "name": "Yatheswar",
        "age": 24
    },
    {
        "name": "Harsha",
        "age": 21
    },
    {
        "name": "Akash",
        "age": 21
    }
]

console.log(myJson1);

let myJson2 = [
    {
        "name": "Yatheswar",
        "age": 24,
        "lastName": undefined
    },
    {
        "name": "Harsha",
        "age": 21,
        "getName": function () {
            return this.name
        }
    },
    {
        "name": "Akash",
        "age": 21
    }
]

console.log(myJson2)

// ========== JSON Parse ==========
function parseJSON() {

    const input = document.getElementById('jsonInput').value;

    const obj = JSON.parse(input);

    console.log(obj);

    document.getElementById('parseResult').textContent = obj

}

// ========== JSON Stringify ==========
function stringifyJson() {

    const obj = {
        name: "Yathe",
        age: 28,
        skills: ["Js", "React"],
        details: {
            city: "Vizag"
        },
        lastName: undefined,
        greet: function() { "Hello"; } 
    };

    const json = JSON.stringify(obj, null, 2);

    document.getElementById('stringifyResult').textContent = json;

}