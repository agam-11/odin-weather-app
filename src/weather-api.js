async function getWeatherData(place) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=ZWK8CCDDZTGYSWKRVPMBA5DBX`
  );
  let responseJSON = await response.json();
  return responseJSON;
}

async function getProcessedWeatherData(place) {
  let response = await getWeatherData(place);
  let temp = response.currentConditions.temp;
  let feelsLike = response.currentConditions.feelslike;
  let windSpeed = response.currentConditions.windspeed;
  let humidity = response.currentConditions.humidity;
  let rain = response.currentConditions.precipprob;

  return { temp, feelsLike, windSpeed, humidity, rain };
}

export { getProcessedWeatherData };
