// ================= BASIC SUCCESS =================
function runSuccess() {
    let output = "";

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("✅ Data Received Successfully");
        }, 1000);
    });

    promise
        .then(data => {
            output += data;
            document.getElementById("successOutput").textContent = output;
        })
        .catch(err => {
            output += err;
            document.getElementById("successOutput").textContent = output;
        });
}

// ================= BASIC FAILURE =================
function runFailure() {
    let output = "";

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("❌  Failed to fetch data");
        }, 1000);
    });

    promise
        .then(data => {
            output += data;
        })
        .catch(err => {
            output += err;
            document.getElementById("failOutput").textContent = output;
        })
}

// ================= ATM Example =================
const isCashAvailable = true;

const atmPromise = new Promise((resolve, reject) => {
    if(isCashAvailable){
        resolve({ message: "Cash Available" });
    } else {
        reject({ message: "No Cash" });
    }
});

atmPromise
    .then(data => console.log(data))
    .catch(err => console.error(err));

// ================= PROMISE CHAINING =================
function runChaining() {
    let output = "";

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 1000);
    });

    promise
        .then(num => {
            output += "Step 1: " + num + "\n";
            return num * 2;
        })
        .then(num => {
            output += "Step 2: " + num + "\n";
            return num + 5;
        })
        .then(num => {
            output += "Final Result: " + num;
            document.getElementById("chainOutput").textContent = output;
        });
}

