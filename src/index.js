import "./styles.css";
import { getProcessedWeatherData } from "./weather-api";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const detailsElement = document.querySelector("#details");
// const dateElemenet = document.querySelector("#date"); TODO: show date
const tempElement = document.querySelector("#temp");
const locationElement = document.querySelector("#location");
// const conditionElement = document.querySelector("#condition"); TODO: show conditions
const windSpeedElement = document.querySelector("#windSpeed");
const humidityElement = document.querySelector("#humidity");
const rainElement = document.querySelector("#rain");

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  let place = inputElement.value;
  let data = await getProcessedWeatherData(place);
  tempElement.textContent = `${data.temp}°F`;
  locationElement.textContent = place;
  windSpeedElement.textContent = `${data.windSpeed} km/h`;
  humidityElement.textContent = `${data.humidity}%`;
  rainElement.textContent = `${data.rain}%`;
  detailsElement.classList.add("show");
});
