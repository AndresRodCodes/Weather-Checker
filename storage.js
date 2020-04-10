class Storage {
	constructor() {
		this.city;
		this.defautCity = 'Miami';
	}

	getLocation() {
		if (localStorage.getItem('city') === null) {
			this.city = this.defautCity;
		} else {
			this.city = localStorage.getItem('city');
		}

		return this.city;
	}

	setLocation(city) {
		localStorage.setItem('city', city);
	}
}
