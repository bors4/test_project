import siteUrls from '../../config/site-urls.js';

class AutoPage {
  constructor() {
    this.elements = {
      'Таб навигации Авто': this.tabAutoNavigation,
    };
  }

  get tabAutoNavigation() {
    return '//a/span[.="Авто"]';
  }

  getURL() {
    return siteUrls.AUTO_URL;
  }
}

export default AutoPage;
