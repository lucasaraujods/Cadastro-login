var btnSignin = document.querySelector("#signin"); //login
var btnSignup = document.querySelector("#signup"); //cadastrar


var body  = document.querySelector("body");

btnSignin.addEventListener("click", function() {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function() {
    body.className = "sign-up-js";
});