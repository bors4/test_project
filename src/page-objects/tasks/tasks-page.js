import * as SiteUrls from '../../config/site-urls.js';

class TasksPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Заказы': this.headerOrdersSection,
    };
  }

  get headerOrdersSection() {
    return '//div[contains(text(), "Заказы")]';
  }

  getURL() {
    return SiteUrls.TASKS_URL;
  }
}

export default TasksPage;
