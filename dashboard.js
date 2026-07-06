import { db } from "./firebase.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
const saveBtn = document.getElementById("saveJob");
const message = document.getElementById("message");

saveBtn.addEventListener("click", () => {

  const title = document.getElementById("jobTitle").value.trim();
  const department = document.getElementById("department").value;
  const lastDate = document.getElementById("lastDate").value;
  const status = document.getElementById("status").value;
  const applyLink = document.getElementById("applyLink").value.trim();

  if (!title || !department || !lastDate || !applyLink) {
    message.style.color = "red";
    message.innerHTML = "Please fill all required fields.";
    return;
  }

  const job = {
    title,
    department,
    lastDate,
    status,
    applyLink,
    whatsapp: "https://wa.me/923401937500",
    createdAt: Date.now()
  };

  push(ref(db, "jobs"), job)
    .then(() => {
      message.style.color = "green";
      message.innerHTML = "✅ Job Saved Successfully!";

      document.getElementById("jobTitle").value = "";
      document.getElementById("department").value = "";
      document.getElementById("lastDate").value = "";
      document.getElementById("status").value = "";
      document.getElementById("applyLink").value = "";
    })
    .catch((error) => {
      message.style.color = "red";
      message.innerHTML = error.message;
    });

});