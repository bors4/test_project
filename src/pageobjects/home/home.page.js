const URLs = require("../../config/constants");

class HomePage {
	constructor() {
		this.elements = {
			"Лого сайта": '//div//a[@href="https://www.onliner.by"]/img',
			"раздел Каталог": '//header/h2/a[contains(text(), "Каталог")]',
			"раздел Люди": '//header/h2/a[contains(text(), "Люди")]',
			"раздел Кошелёк": '//header/h2/a[contains(text(), "Кошелёк")]',
			"раздел Авто": '//header/h2/a[contains(text(), "Авто")]',
			"раздел Технологии": '//header/h2/a[contains(text(), "Технологии")]',
			"раздел Недвижимость": '//header/h2/a[contains(text(), "Недвижемость")]',
			"раздел Форум": '//header/h2/a[contains(text(), "Форум")]'
		};
	}

	getURL() {
		return URLs.HOME;
	}
}

module.exports = HomePage;
