const SiteUrls = require('../../config/site-urls');

class HomePage {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Лого сайта': HomePage.siteLogo,
      'Раздел Каталог': HomePage.sectionCatalog,
      'Раздел Люди': HomePage.sectionPeople,
      'Раздел Кошелек': HomePage.sectionWallet,
      'Раздел Авто': HomePage.sectionAuto,
      'Раздел Технологии': HomePage.sectionTech,
      'Раздел Недвижимость': HomePage.sectionRealty,
      'Раздел Форум': HomePage.sectionForum,
      'Ссылка Мобильные телефоны': HomePage.linkMobilePhones,
      'Модальное окно авторизации': HomePage.modalAuth,
    };
  }

  static get siteLogo() {
    return `//div//a[@href="${SiteUrls.HOME}"]/img`;
  }

  static get sectionCatalog() {
    return '//header/h2/a[contains(text(), "Каталог")]';
  }

  static get sectionPeople() {
    return '//header/h2/a[contains(text(), "Люди")]';
  }

  static get sectionWallet() {
    return '//header/h2/a[contains(text(), "Кошелек")]';
  }

  static get sectionAuto() {
    return '//header/h2/a[contains(text(), "Авто")]';
  }

  static get sectionTech() {
    return '//header/h2/a[contains(text(), "Технологии")]';
  }

  static get sectionRealty() {
    return '//header/h2/a[contains(text(), "Недвижимость")]';
  }

  static get sectionForum() {
    return '//header/h2/a[contains(text(), "Форум")]';
  }

  static get linkMobilePhones() {
    return `//a[@href="${SiteUrls.CATALOG_MOBILE}"]`;
  }

  static get modalAuth() {
    return '//div[@id="auth-container"]';
  }

  static getURL() {
    return SiteUrls.HOME;
  }
}

module.exports = HomePage;
