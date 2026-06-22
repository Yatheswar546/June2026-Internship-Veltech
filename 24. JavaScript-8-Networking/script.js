// ================= GET REQUEST =================
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/101");

        const data = await response.json();

        document.getElementById("getResult").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log("Error:", error);
        document.getElementById('getResult').textContent = error;
    }
}

// ================= POST REQUEST =================
async function postData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "JS Notes",
                body: "Learning HTTP",
                userId: 1
            })
        });

        const data = await response.json();

        document.getElementById("postResult").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log("Error:", error);
    }
}


// ================================== WEB APIs ==================================

// ================= setTimeout =================
function runTimeout() {
    document.getElementById("timeoutResult").innerText = "Waiting...";

    setTimeout(() => {
        document.getElementById("timeoutResult").innerText = "Executed after 2 seconds";
    }, 2000);
}

// ================= Fetch API =================
async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();

        document.getElementById("fetchResult").textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        console.log("Error:", err);
    }
}

// ================= LocalStorage =================
function saveData() {
    localStorage.setItem("username", "Yathe");
    document.getElementById("storageResult").innerText = "Data Saved!";
}

function getData() {
    const data = localStorage.getItem("username");
    document.getElementById("storageResult").innerText = data;
}

localStorage.clear()