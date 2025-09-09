const SiteUrls = require('../../config/site-urls');

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
    return SiteUrls.TECH;
  }
}

module.exports = TechPage;
