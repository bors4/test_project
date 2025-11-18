import siteUrls from '../../config/site-urls.js';

class PeoplePage {
  constructor() {
    this.elements = {
      'Таб навигации Люди': this.tabPeople,
    };
  }

  get tabPeople() {
    return '//a/span/span[.="Люди"]/parent::span/parent::a';
  }

  getURL() {
    return siteUrls.PEOPLE_URL;
  }
}

export default PeoplePage;
