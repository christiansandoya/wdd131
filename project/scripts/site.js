const fullDate = new Date();
const currentYear = fullDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const menubutton = document.querySelector("#menu");

menubutton.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") {
        menubutton.classList.toggle("show");
    }
});