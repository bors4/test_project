import siteUrls from '../../config/site-urls.js';

class ForumPage {
  constructor() {
    this.elements = {
      'Заголовок раздела Форум': this.headerForumSection,
    };
  }

  get headerForumSection() {
    return '//h1[contains(text(), "Форум")]';
  }

  getURL() {
    return siteUrls.FORUM_URL;
  }
}

export default ForumPage;
