const fullDate = new Date();
const currentYear = fullDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const params = new URLSearchParams(window.location.search);
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.querySelector("#reviewCount").textContent = reviewCount;