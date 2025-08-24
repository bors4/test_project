const SiteUrls = require('../../config/site-urls');

class TechPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Таб навигации Технологии': TechPage.tabTechNavigation,
    };
  }

  static get tabTechNavigation() {
    return '//a/span[.="Технологии"]';
  }

  static getURL() {
    return SiteUrls.TECH;
  }
}

module.exports = TechPage;
