const SiteUrls = require("../../config/site.urls");

class HomePage {
	constructor() {
		this.elements = {
			"Лого сайта": '//div//a[@href="https://www.onliner.by"]/img',
			"раздел Каталог": '//header/h2/a[contains(text(), "Каталог")]',
			"раздел Люди": '//header/h2/a[contains(text(), "Люди")]',
			"раздел Кошелек": '//header/h2/a[contains(text(), "Кошелек")]',
			"раздел Авто": '//header/h2/a[contains(text(), "Авто")]',
			"раздел Технологии": '//header/h2/a[contains(text(), "Технологии")]',
			"раздел Недвижимость": '//header/h2/a[contains(text(), "Недвижимость")]',
			"раздел Форум": '//header/h2/a[contains(text(), "Форум")]'
		};
	}

	getURL() {
		return SiteUrls.HOME;
	}
}

module.exports = HomePage;
