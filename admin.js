import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", () => {

    signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
    )

    .then(() => {
        msg.style.color = "green";
        msg.innerHTML = "Login Successful...";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        },1000);

    })

    .catch((error) => {
        msg.style.color = "red";
        msg.innerHTML = error.message;
    });

});