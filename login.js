const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    random = "72b7415b8c5f53358db8b9517376cd95"
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === CryptoJS.AES.decrypt('U2FsdGVkX18TVI3FN91NkaOhsBokyGRqRT+PcMpoPx0=',random).toString(CryptoJS.enc.Utf8) && password === CryptoJS.AES.decrypt('U2FsdGVkX1/TbuZKkYFpOe01p+oLf+CGgl3YL1O54sA=',random).toString(CryptoJS.enc.Utf8)) {
        alert("You have successfully logged in.");
        window.location.replace("google_drive docs.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})