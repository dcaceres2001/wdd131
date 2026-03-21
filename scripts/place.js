const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

const temp = 17;
const windspeed = 5;

const calculateWindChill = (temp, windspeed) => {
    if (temp <= 50 && windspeed > 3) {
        const chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
        return chill;
    }
    return temp;
};

const windChill = calculateWindChill(temp, windspeed);
document.getElementById("windchill").textContent = windChill.toFixed(1) + " °C";

