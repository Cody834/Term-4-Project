const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin1" && password === "admin123") {
        alert("Welcome Cody");
        location.assign("../Admin/AdHomePage.html");
    } else {
        alert("Please Enter Correct Details");
    }
    
    
})