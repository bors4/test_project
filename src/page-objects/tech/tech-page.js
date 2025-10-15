import * as SiteUrls from '../../config/site-urls.js';

class TechPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Технологии': this.tabTechNavigation,
    };
  }

  get tabTechNavigation() {
    return '//a/span[.="Технологии"]';
  }

  getURL() {
    return SiteUrls.TECH_URL;
  }
}

export default TechPage;
