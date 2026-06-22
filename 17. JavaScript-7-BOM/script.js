// window.alert('Hello');
console.log(window);

// location object
console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.protocol)
// window.location.reload()

// screen object
console.log(screen.width);
console.log(screen.height);

let size = document.getElementById("size");

size.innerText = `Screen: ${screen.width} x ${screen.height}`;

// navigator object
console.log(navigator.userAgent)
console.log(navigator.platform)
console.log(navigator.language)
console.log(navigator.onLine)

