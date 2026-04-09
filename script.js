// Dummy users (for testing)
const users = [];

// REGISTER FUNCTION
function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    users.push({ name, email, password });
    alert("Registration Successful!");
    window.location.href = "login.html";
}

// LOGIN FUNCTION
function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Admin login
    if (email === "admin.udyog@gmail.com" && password === "admin@123") {
        alert("Admin Login Successful");
        window.location.href = "admin.html";
        return;
    }

    // User login
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("User Login Successful");
        window.location.href = "user.html";
    } else {
        alert("Invalid Credentials");
    }
}

// APPLY JOB
function applyJob(jobName) {
    alert("Applied for " + jobName);
}

// LOGOUT
function logout() {
    alert("Logged out successfully");
    window.location.href = "login.html";
}