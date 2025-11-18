import siteUrls from '../../config/site-urls.js';

class RealtPage {
  constructor() {
    this.elements = {
      'Таб навигации Недвижимость': this.tabRealtyNavigation,
    };
  }

  get tabRealtyNavigation() {
    return '//a/span[.="Недвижимость"]';
  }

  getURL() {
    return siteUrls.REALT_URL;
  }
}

export default RealtPage;
