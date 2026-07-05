import { database } from "./firebase.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const saveBtn = document.getElementById("saveJob");

saveBtn.addEventListener("click", () => {

    const job = {
        title: document.getElementById("jobTitle").value,
        department: document.getElementById("department").value,
        lastDate: document.getElementById("lastDate").value,
        status: document.getElementById("status").value,
        applyLink: document.getElementById("applyLink").value
    };

    push(ref(database, "jobs"), job)
    .then(() => {
        document.getElementById("message").innerHTML = "✅ Job Saved Successfully!";
        document.getElementById("message").style.color = "green";

        document.getElementById("jobTitle").value = "";
        document.getElementById("department").value = "";
        document.getElementById("lastDate").value = "";
        document.getElementById("applyLink").value = "";
    })
    .catch((error) => {
        document.getElementById("message").innerHTML = error.message;
        document.getElementById("message").style.color = "red";
    });

});