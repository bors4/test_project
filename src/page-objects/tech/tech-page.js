import siteUrls from '../../config/site-urls.js';

class TechPage {
  constructor() {
    this.elements = {
      'Таб навигации Технологии': this.tabTechNavigation,
    };
  }

  get tabTechNavigation() {
    return '//a/span[.="Технологии"]';
  }

  getURL() {
    return siteUrls.TECH_URL;
  }
}

export default TechPage;
