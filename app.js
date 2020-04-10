// Init LS
const storage = new Storage();
// weather location
const weahterLocation = storage.getLocation();
// Init weather model
const weather = new WeatherModel(weahterLocation);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
	// Get city from modal
	const city = document.querySelector('#city').value;
	// Change weather locaiton
	weather.changeLocation(city);
	// Save user's city
	storage.setLocation(city);
	// Get and paint weather
	getWeather();
	// Close modal
	$('#locModal').modal('hide');
});
function getWeather() {
	weather
		.getWeather()
		.then((weatherData) => {
			console.log(weatherData);
			ui.paint(weatherData);
		})
		.catch((err) => console.log(err));
}
