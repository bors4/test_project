const SiteUrls = require("../../config/site.urls");

class RealtPage {
	constructor() {
		this.elements = {
			"таб навигации Недвижемость": '//a/span[.="Недвижемость"]'
		};
	}

	getURL() {
		return SiteUrls.REALT;
	}
}

module.exports = RealtPage;
