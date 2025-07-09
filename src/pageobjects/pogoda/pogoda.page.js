const SiteUrls = require("../../config/site.urls");

class PogodaPage {
	constructor() {
		this.elements = {
			"заголовок раздела Сейчас в": '//p[contains(text(), "Сейчас в")]',
			"дропдаун списка городов": '//p[contains(text(), "Сейчас в")]/a',
			"список городов":'//div[@class="b-weather-today__city-i"]/div',
			"город Киев":'//div/ul/li/a[contains(text(),"Киев")]'
		};
	}

	getURL() {
		return SiteUrls.POGODA;
	}
}

module.exports = PogodaPage;
