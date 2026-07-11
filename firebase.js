import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNxcSgHd7fy54I-dx2x-wyfoqIHGcUXbw",
  authDomain: "pakcareerhub-fb281.firebaseapp.com",
  databaseURL: "https://pakcareerhub-fb281-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pakcareerhub-fb281",
  storageBucket: "pakcareerhub-fb281.firebasestorage.app",
  messagingSenderId: "362113301778",
  appId: "1:362113301778:web:f0f0cfeeae9777655547cb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };