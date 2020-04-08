// Init weather model
const weather = new WeatherModel('boston');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

function getWeather() {
	weather
		.getWeather()
		.then((weatherData) => {
			console.log(weatherData);
			ui.paint(weatherData);
		})
		.catch((err) => console.log(err));
}
