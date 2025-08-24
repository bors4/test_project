const SiteUrls = require('../../config/site-urls');

class ForumPage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Заголовок раздела Форум': ForumPage.headerForumSection,
    };
  }

  static get headerForumSection() {
    return '//h1[contains(text(), "Форум")]';
  }

  static getURL() {
    return SiteUrls.FORUM;
  }
}

module.exports = ForumPage;
