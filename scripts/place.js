const fullDate = new Date();
const currentYear = fullDate.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 20;
const windSpeed = 8;
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}
const windChillOutput = document.querySelector("#windChill");
if (temperature <= 10 && windSpeed > 4.8) {
   windChillOutput.textContent = calculateWindChill(temperature, windSpeed);
}
else {
    windChillOutput.textContent = "N/A";
}

