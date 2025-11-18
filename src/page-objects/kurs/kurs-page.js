import siteUrls from '../../config/site-urls.js';

class KursPage {
  constructor() {
    this.elements = {
      'Заголовок раздела Лучшие курсы валют': this.headerBestRates,
    };
  }

  get headerBestRates() {
    return '//h1[text()="Лучшие курсы валют"]';
  }

  getURL() {
    return siteUrls.KURS_URL;
  }
}

export default KursPage;
