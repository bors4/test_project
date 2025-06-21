const SiteUrls = require("../../config/site.urls");

class ForumPage {
	constructor() {
		this.elements = {
			"заголовок раздела Форум": '//h1[contains(text(), "Форум")]'
		};
	}

	getURL() {
		return SiteUrls.FORUM;
	}
}

module.exports = ForumPage;
