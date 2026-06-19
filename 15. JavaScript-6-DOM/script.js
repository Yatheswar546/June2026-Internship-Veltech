// Select HTML Elements

let element1 = document.getElementById("title");
// console.log(element1);

let element2 = document.getElementsByClassName("students");
// console.log(element2);

let element3 = document.getElementsByTagName("h4");
// console.log(element3);

let element4 = document.querySelector(".students");
// console.log(element4)

let element5 = document.querySelectorAll("#title");
// console.log(element5)

// UPDATE HTML elements 
// document.getElementById("heading").innerHTML = "<i>Hello Everyone</i>"

let image = document.getElementById("image");

// console.log(image.getAttribute("src"));
// console.log(image.getAttribute("alt"))
// console.log(image.getAttribute("id"))
// console.log(image.getAttribute("height"))

// image.setAttribute("src", "./images/2.jpg");
// image.setAttribute("height", "300px");

// let heading1 = document.getElementById("heading")
// heading1.style.color = "red";
// heading1.style.fontSize = "40px";

/*
    font-size        :  fontSize
    padding0left     : paddingLeft
    margin           : margin
    background-color : backgroundColor
*/

// let element6 = document.getElementById("text");
// element6.innerText = "Hello all";

// element6.textContent = "Updated Text";

// let list = document.getElementById("list");

// let item = document.createElement('li')

// item.innerText = "Mango";

// let banana = document.getElementById("banana");
// list.insertBefore(item, banana);

//  Create Elements
// let heading2 = document.createElement('h1');
// console.log(heading2)

// let heading2Text = document.createTextNode('I created using Js');
// console.log(heading2Text)

// heading2.appendChild(heading2Text);

// let divison = document.getElementById("newElement");
// divison.appendChild(heading2);

// Add Elements
// let div = document.getElementById("addElement2");
// div.append(" and Hello Students");

// let div2 = document.getElementById("addElement1");
// div2.prepend('Starting and ');

// Replace Elements
// Old Method
// let newContent = document.createElement('div');

// newContent.innerText = 'New Content';

// let oldContent = document.getElementById('old');

// let parent = document.getElementById('parent');

// parent.replaceChild(newContent, oldContent);


// New Method
// let newContent = document.createElement('div');

// newContent.innerText = 'New Content';

// let oldContent = document.getElementById('old');

// oldContent.replaceWith(newContent);

// Delete Elements
// old method
// let parent = document.getElementById('list');

// let child = document.getElementById('banana');

// parent.removeChild(child);

// new method
// document.getElementById('dragonFruit').remove()

// Class Manipulation

// Example 1:
// let list1 = document.getElementById('list1');

// list.classList.add('big')

// list1.classList.remove('big');
// list1.classList.add('small');

// console.log(list1.classList)

// Example 2:
// let list2 = document.getElementById('list2');
// list2.classList.toggle('big');