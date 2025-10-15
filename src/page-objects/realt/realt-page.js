import * as SiteUrls from '../../config/site-urls.js';

class RealtPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Недвижимость': this.tabRealtyNavigation,
    };
  }

  get tabRealtyNavigation() {
    return '//a/span[.="Недвижимость"]';
  }

  getURL() {
    return SiteUrls.REALT_URL;
  }
}

export default RealtPage;
