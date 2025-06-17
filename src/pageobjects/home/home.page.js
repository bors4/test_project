const URLs = require("../../config/constants");

class HomePage {
	constructor() {
		this.elements = {
			"Лого сайта": '//div//a[@href="https://www.onliner.by"]/img',
		};
	}

	getURL() {
		return URLs.HOME;
	}
}

module.exports = HomePage;
