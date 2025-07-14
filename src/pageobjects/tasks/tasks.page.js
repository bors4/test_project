const SiteUrls = require('../../config/site.urls');

class TasksPage {
	constructor() {
		this.elements = {
			'заголовок раздела Заказы': '//div[contains(text(), "Заказы")]',
		};
	}

	getURL() {
		return SiteUrls.TASKS;
	}
}

module.exports = TasksPage;
