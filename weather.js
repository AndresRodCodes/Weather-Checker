class WeatherModel {
	constructor(city, state) {
		this.apiKey = '57606d31b2f137782d0c6cbaf9541483';
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

		return responseData;
	}
	// getIconURL(iconValue) {
	// 	// Contruct icon URL
	// 	const iconURL = `http://openweathermap.org/img/wn/${iconValue}@2x.png`;

	// 	return iconURL;
	// }

	// Change location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
