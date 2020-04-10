class UI {
	constructor() {
		this.location = document.querySelector('#w-location');
		this.desc = document.querySelector('#w-desc');
		this.temp = document.querySelector('#w-temp');
		this.details = document.querySelector('#w-details');
		this.icon = document.querySelector('#w-icon');
		this.humidity = document.querySelector('#w-humidity');
		this.feelsLike = document.querySelector('#w-feels-like');
		this.pressure = document.querySelector('#w-pressure');
		this.wind = document.querySelector('#w-wind');
	}

	// Convert Kelvin to F
	convertKelvinToF(kelvin) {
		let fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
		return fahrenheit.toFixed(1);
	}

	// Paint the UI
	paint(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = weather.weather[0].description;
		this.temp.textContent = `${this.convertKelvinToF(weather.main.temp)} F`;
		this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
		this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
		this.feelsLike.textContent = `Feels Like: ${this.convertKelvinToF(weather.main.feels_like)} F`;
		this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
		this.wind.textContent = `Wind: ${weather.wind.speed} Mph`;
	}
}
