// =========== Event Bubbling ============
document.getElementById('grandparent').addEventListener('click', () => {
    console.log("Grandparent Clicked");
});

document.getElementById('parent').addEventListener('click', () => {
    console.log("Parent Clicked");
});

document.getElementById('child').addEventListener('click', () => {
    console.log("Child Clicked");
});

// =========== Event Delegation ============
document.getElementById('list').addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        console.log("Clicked: ", e.target.textContent);
    }
});

// =========== Stop Event Bubbling ============
document.getElementById('child').addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Bubbling Stopped");
})

document.getElementById('parent').addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Bubbling Stopped");
})