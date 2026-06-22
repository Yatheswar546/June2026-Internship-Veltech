// ============== BASIC TRY CATCH ===============
function parseJSON() {

    let input = document.getElementById('jsonInput').value;
    // console.log(input);

    try {
        let result = JSON.parse(input);
        document.getElementById('jsonResult').innerHTML = "Valid JSON: " + JSON.stringify(result);
    }
    catch (error) {
        document.getElementById('jsonResult').innerHTML = "Error: Invalid JSON";
    }
    finally {
        console.log("JSON Parse Attempt Finished");
    }
}

// ================ THROW CUSTOM ERROR =================
function validateAge() {
    
    let age = document.getElementById('validateAge').value;
    
    if(age < 18) {
        throw new Error("Age must be 18+");
    }
    return "Valid Age";
}

function checkAge() {
    let result = document.getElementById('ageResult');

    try {
        result.textContent = validateAge();
    }
    catch(error) {
        result.textContent = error.message;
    }
}

// ================ Optional Chaining =================
function checkUser() {

    let user = {
        name: "Yathe",
        address: {
            city: null
        }
    };

    // let city = user.address;

    let city = user.address?.city || "City Not Available";

    document.getElementById('userResult').textContent = city;

    // without optional chaining -> no error
    // user.address.city -> no output

}


