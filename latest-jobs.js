import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const jobsContainer = document.getElementById("jobsContainer");

onValue(ref(db, "jobs"), (snapshot) => {

    jobsContainer.innerHTML = "";

    snapshot.forEach((child) => {

        const job = child.val();

        jobsContainer.innerHTML += `
        <div class="job-card">
            <h2>${job.title}</h2>
            <p><strong>Department:</strong> ${job.department}</p>
            <p><strong>Last Date:</strong> ${job.lastDate}</p>
            <p><strong>Status:</strong> ${job.status}</p>

            <a href="${job.applyLink}" target="_blank" class="apply-btn">
                Official Website
            </a>

            <br><br>

            <a href="${job.whatsapp}" target="_blank" class="apply-btn">
                Apply Through PakCareerHub
            </a>

        </div>
        `;
    });

});