const SiteUrls = require('../../config/site.urls');

class HomePage {
	constructor() {
		this.elements = {
			'Лого сайта': `//div//a[@href="${SiteUrls.HOME}"]/img`,
			'раздел Каталог': '//header/h2/a[contains(text(), "Каталог")]',
			'раздел Люди': '//header/h2/a[contains(text(), "Люди")]',
			'раздел Кошелек': '//header/h2/a[contains(text(), "Кошелек")]',
			'раздел Авто': '//header/h2/a[contains(text(), "Авто")]',
			'раздел Технологии': '//header/h2/a[contains(text(), "Технологии")]',
			'раздел Недвижимость': '//header/h2/a[contains(text(), "Недвижимость")]',
			'раздел Форум': '//header/h2/a[contains(text(), "Форум")]',
			'ссылка Мобильные телефоны': `//a[@href="${SiteUrls.CATALOG_MOBILE}"]`,
			'модальное окно авторизации': '//div[@id="auth-container"]',
		};
	}

	getURL() {
		return SiteUrls.HOME;
	}
}

module.exports = HomePage;
