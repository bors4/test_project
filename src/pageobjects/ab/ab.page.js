const SiteUrls = require("../../config/site.urls");

class AbPage {
	constructor() {
		this.elements = {
			"Автобарахолка": '//h1[contains(text(), "Автобарахолка")]'
		};
	}

	getURL() {
		return SiteUrls.AB;
	}
}

module.exports = AbPage;
