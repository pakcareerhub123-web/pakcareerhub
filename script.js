function searchJobs() {

let input = document.querySelector(".search-box").value.toLowerCase();

if(input.includes("army")){
window.location.href="army.html";
}

else if(input.includes("navy")){
window.location.href="navy.html";
}

else if(input.includes("air force") || input.includes("paf")){
window.location.href="airforce.html";
}

else if(input.includes("police")){
window.location.href="police.html";
}

else{
alert("Sorry! No matching job found.");
}

}let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}function updateDateTime(){

let now = new Date();

let options = {
weekday: "short",
day: "2-digit",
month: "short",
year: "numeric"
};

let date = now.toLocaleDateString("en-GB", options);

let time = now.toLocaleTimeString("en-US", {
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});

document.getElementById("dateTime").innerHTML =
"🕒 " + time + "<br>📅 " + date;

}

setInterval(updateDateTime,1000);

updateDateTime();const images = [
"images/army.jpg",
"images/navy.jpg",
"images/airforce.jpg",
"images/police.jpg",
"images/nadra.jpg",
"images/wapda.jpg"
];

let current = 0;

function changeImage(){

current++;

if(current >= images.length){
current = 0;
}

document.getElementById("sliderImage").src = images[current];

}

setInterval(changeImage,3000);let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

}

setInterval(showSlide,4000);function searchJobs(){

let input=document.getElementById("jobSearch").value.toLowerCase();

let jobs=document.getElementsByClassName("job");

for(let i=0;i<jobs.length;i++){

let text=jobs[i].innerText.toLowerCase();

if(text.includes(input)){
jobs[i].style.display="block";
}
else{
jobs[i].style.display="none";
}

}

}