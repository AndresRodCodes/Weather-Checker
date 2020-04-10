class WeatherModel {
	constructor(city, state) {
		this.apiKey = '';
		this.city = city;
	}
	// Gets weather data
	async getWeather() {
		// Get reponse
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
		);
		// Convert to object
		const responseData = await response.json();
		console.log(responseData);
		return responseData;
	}

	// Change location
	changeLocation(city) {
		this.city = city;
	}
}
