import * as SiteUrls from '../../config/site-urls.js';

class AutoPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Авто': this.tabAutoNavigation,
    };
  }

  get tabAutoNavigation() {
    return '//a/span[.="Авто"]';
  }

  getURL() {
    return SiteUrls.AUTO_URL;
  }
}

export default AutoPage;
