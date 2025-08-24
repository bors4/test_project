const SiteUrls = require('../../config/site-urls');

class TasksPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Заказы': TasksPage.headerOrdersSection,
    };
  }

  static get headerOrdersSection() {
    return '//div[contains(text(), "Заказы")]';
  }

  static getURL() {
    return SiteUrls.TASKS;
  }
}

module.exports = TasksPage;
