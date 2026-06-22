// ================= GET REQUEST =================
function getPosts() {
    let output = "Loading...\n";
    document.getElementById("getOutput").textContent = output;

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            if(!res.ok) throw new Error("HTTP Error: " + res.status);
            return res.json();
        })
        .then(data => {
            output = data.slice(0,5)
                .map(post => post.title)
                .join("\n");

            document.getElementById("getOutput").textContent = output;
        })
        .catch(err => {
            document.getElementById("getOutput").textContent = err;
        });
}

// ================= POST REQUEST =================
function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "Hello",
            body: "Fetch API",
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("postOutput").textContent = "Created ID: " + data.id;
    })
    .catch(err => {
        document.getElementById("postOutput").textContent = err;
    });
}



// ================= fetch with 2xx and 4xx error codes =================

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => console.log(res.status))

fetch("https://jsonplaceholder.typicode.com/users/99999")
    .then(res => console.log(res.status))



// ================= GITHUB USER SEARCH =================
function searchUser() {
    let username = document.getElementById("username").value;

    if(!username) return;

    document.getElementById("userOutput").textContent = "Loading...";

    fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if(!res.ok) throw new Error("User not found");
            return res.json();
        })
        .then(data => {
            let result = `
                Name: ${data.name}
                Followers: ${data.followers}
                Public Repos: ${data.public_repos}
            `;

            document.getElementById("userOutput").textContent = result;
        })
        .catch(err => {
            document.getElementById("userOutput").textContent = err;
        });
}