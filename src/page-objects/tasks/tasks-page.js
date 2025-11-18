import siteUrls from '../../config/site-urls.js';

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
    return siteUrls.TASKS_URL;
  }
}

export default TasksPage;
