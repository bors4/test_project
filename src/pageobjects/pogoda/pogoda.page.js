const SiteUrls = require("../../config/site.urls");

class PogodaPage {
	constructor() {
		this.elements = {
			"Сейчас в": '//p[contains(text(), "Сейчас в")]'
		};
	}

	getURL() {
		return SiteUrls.POGODA;
	}
}

module.exports = PogodaPage;
