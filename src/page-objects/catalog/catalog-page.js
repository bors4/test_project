const SiteUrls = require('../../config/site-urls');
const BasePage = require('../header/base-header');

class CatalogPage extends BasePage {
  static SiteUrls = SiteUrls;

  constructor() {
    super();

    this.elements = {
      'Заголовок раздела Каталог': CatalogPage.headerCatalogSection,
      'Заголовок раздела Популярные категории': CatalogPage.headerPopularCategorySection,
    };
  }

  static get headerCatalogSection() {
    return '//h1[contains(text(), "Каталог")]';
  }

  static get headerPopularCategorySection() {
    return '//h2[contains(text(), "Популярные категории")]';
  }

  static getURL() {
    return SiteUrls.CATALOG;
  }
}

module.exports = CatalogPage;
