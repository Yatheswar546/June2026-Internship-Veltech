// ================= BASIC EXAMPLE =================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function basicExample() {
    let output = "";

    output += "Step 1\n";

    document.getElementById("basicOutput").textContent = output;

    await delay(2000);

    output += "Step 2 (after 2 sec)\n";

    document.getElementById("basicOutput").textContent = output;

}

// ================= New Async/Await =================
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve("Success");
            } else {
                reject("Failure");
            }
        }, 1000);
    });
}

async function runCheck() {

    let num = Number(document.getElementById("numberInput").value);
    let resultElement = document.getElementById("result");

    try {
        const result = await checkNumber(num);
        console.log(result);
        resultElement.textContent = result;
    } catch (err) {
        console.log(err);
        resultElement.textContent = err;
    }
}

// ================= ERROR HANDLING =================
async function getError() {
    try {
        const res = await fetch("https://invalid-url");
        const data = await res.json();
        document.getElementById("errorOutput").textContent = data;
    } catch (err) {
        document.getElementById("errorOutput").textContent = "Error: " + err.message;
    }
}


// ================= API CALL =================
async function getPosts() {
    let output = "Loading...\n";
    document.getElementById("apiOutput").textContent = output;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!res.ok) throw new Error("HTTP Error: " + res.status);

        const data = await res.json();

        output = data.slice(0,5)
            .map(post => post.title)
            .join("\n");
    
    } catch (err) {
        output = err;
    } 

    document.getElementById("apiOutput").textContent = output;
}