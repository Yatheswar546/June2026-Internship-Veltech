////////////// Example 1: //////////////
let btn1 = document.getElementById('btn')

alert('Hi, the button is clicked');

btn1.onclick = function() {
    alert('Hi, the button is clicked');
}

///////////// Example 2: //////////////
let btn2 = document.getElementById('btn');
let body = document.getElementById('body');

btn2.addEventListener('click', function() {

    // body.style.backgroundColor = "rgb(20, 67, 187)";

    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 255);
    let randomNum3 = Math.floor(Math.random() * 255);

    // console.log(randomNum1, randomNum2, randomNum3);

    const rgbValue = "rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")";
    // console.log(rgbValue);

    body.style.backgroundColor = rgbValue;

});


///////////// Example 3: //////////////
let btn3 = document.getElementById("btnIncrease");
let element = document.getElementById("element");

let initialSize = window.getComputedStyle(element).fontSize;
// console.log(initialSize, typeof(initialSize));

// console.log(initialSize.substring(0, (initialSize.length - 2)), typeof(initialSize))

initialSize = parseInt(initialSize.substring(0, (initialSize.length - 2)));

// console.log(initialSize, typeof(initialSize));

btn3.addEventListener('click', function() {

    initialSize = initialSize + 10;
    // console.log(initialSize);

    element.style.fontSize = initialSize + "px";

})