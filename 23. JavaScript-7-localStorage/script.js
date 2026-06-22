// ================ BASIC STORAGE ================

// Username
function saveName() {
    let name = document.getElementById('username').value;
    localStorage.setItem('username', name);
}

function getName() {  
    let name = localStorage.getItem('username');
    document.getElementById('usernameOutput').innerText = name;
}

function removeName() {
    localStorage.removeItem('username');
    document.getElementById('usernameOutput').innerText = "Removed";
}

// Phone Number
function saveNumber() {
    let name = document.getElementById('phone').value;
    localStorage.setItem('phone', name);
}

function getNumber() {  
    let name = localStorage.getItem('phone');
    document.getElementById('phoneOutput').innerText = name;
}

function removeNumber() {
    localStorage.removeItem('phone');
    document.getElementById('phoneOutput').innerText = "Removed";
}

// ================ Storing Objects ================
let user = {
    name: "Yathe",
    age: 25
}

localStorage.setItem("userDetails", user);
localStorage.setItem("userDetails", JSON.stringify(user))

let data = JSON.parse(localStorage.getItem("userDetails"))
console.log(data)

localStorage.clear();

// ================ Store two variables at a time ================

function saveNames() {
    let newName = document.getElementById('users').value;

    let usernames = JSON.parse(localStorage.getItem("usernames")) || [];

    usernames.push(newName);

    localStorage.setItem("usernames", JSON.stringify(usernames));
}

function getNames() { 
    console.log("Get Names function") 
    let names = JSON.parse(localStorage.getItem('usernames'));
    document.getElementById('usersOutput').innerText = names;
}

function removeNames() {
    localStorage.removeItem('usernames');
    document.getElementById('usersOutput').innerText = "All Names are Removed";
}

localStorage.clear()