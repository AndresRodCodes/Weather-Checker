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
	// Paint the UI
	paint(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = weather.weather[0].description;
		this.temp.textContent = weather.main.temp;
		this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
		this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
		this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
		this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
		this.wind.textContent = `Wind: ${weather.wind.speed}`;
	}
}
