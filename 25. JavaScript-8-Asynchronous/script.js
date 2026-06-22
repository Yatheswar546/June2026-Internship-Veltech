// ================= SYNCHRONOUS =================
function runSync() {
    let output = "";

    output += "Step 1\n";
    output += "Step 2\n";
    output += "Step 3\n";

    document.getElementById("syncOutput").textContent = output;
}

// ================= ASYNCHRONOUS =================
function runAsync() {
    let output = "";

    output += "Step 1\n";

    setTimeout(() => {
        output += "Step 2 (Delayed)\n";
        document.getElementById("asyncOutput").textContent = output;
    }, 5000);

    output += "Step 3\n";

    document.getElementById("asyncOutput").textContent = output;
}

// ================= SETINTERVAL =================
let intervalId;

function startInterval() {
    let count= 0;

    intervalId = setInterval(() => {
        count++;
        document.getElementById("intervalOutput").innerText = "Running: " + count;
    }, 1000);
}

function stopInterval () {
    clearInterval(intervalId);
}