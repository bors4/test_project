const SiteUrls = require('../../config/site-urls');

class TasksPage {
	constructor() {
		this.elements = {
			'Заголовок раздела Заказы': this.headerOrdersSection,
		};
	}

	get headerOrdersSection() {
		return '//div[contains(text(), "Заказы")]';
	}

	getURL() {
		return SiteUrls.TASKS;
	}
}

module.exports = TasksPage;
