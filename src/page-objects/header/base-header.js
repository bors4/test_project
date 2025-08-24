const SiteUrls = require('../../config/site-urls');

class BaseHeader {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Лого сайта': BaseHeader.siteLogo,
      'Ссылка Каталог': BaseHeader.linkCatalog,
      'Ссылка Новости': BaseHeader.linkNews,
      'Ссылка Автобарахолка': BaseHeader.linkAb,
      'Ссылка Дома и квартиры': BaseHeader.linkRealty,
      'Ссылка Услуги': BaseHeader.linkTasks,
      'Ссылка Барахолка': BaseHeader.linkBaraholka,
      'Ссылка Форум': BaseHeader.linkForum,
      'Ссылка Onliner Клевер': BaseHeader.linkClever,
      'Ссылка Курсы валют': BaseHeader.linkCurrency,
      'Ссылка Погода': BaseHeader.linkWeather,
      'Текст курс доллара': BaseHeader.textCurrencyRate,
      'Дропдаун Новости': BaseHeader.dropdownNews,
      'Дропдаун Автобарахолка': BaseHeader.dropdownAb,
      'Дропдаун Дома и квартиры': BaseHeader.dropdownRealty,
      'Поле поиска': BaseHeader.inputSearch,
      'Модальное окно поиска': BaseHeader.modalSearch,
      'Кнопка Вход': BaseHeader.buttonLogin,
      'Кнопка Facebook': BaseHeader.buttonFacebook,
      'Кнопка Vkontakte': BaseHeader.buttonVk,
      'Кнопка Google': BaseHeader.buttonGoogle,
      'Кнопка Корзина': BaseHeader.buttonCart,
      'Аватар профиля': BaseHeader.profileAvatar,
      'Меню профиля': BaseHeader.menuProfile,
      '18+': BaseHeader.labelAdultContent,
    };
  }

  static get siteLogo() {
    return `//div//a[@href="${SiteUrls.HOME}"]/img`;
  }

  static get linkCatalog() {
    return `//nav//a[@href="${SiteUrls.CATALOG}"]`;
  }

  static get linkNews() {
    return `//div//a[@href="${SiteUrls.HOME}"]//span[.="Новости"]`;
  }

  static get linkAb() {
    return `//nav//a[@href="${SiteUrls.AB}"]//span[.="Автобарахолка"]`;
  }

  static get linkRealty() {
    return `//nav//li/a[@href="${SiteUrls.R}/pk"]`;
  }

  static get linkTasks() {
    return `//nav//a[@href="${SiteUrls.TASKS}"]/span[.="Услуги"]`;
  }

  static get linkBaraholka() {
    return `//nav//a[@href="${SiteUrls.BARAHOLKA}"]//span[.="Барахолка"]`;
  }

  static get linkForum() {
    return `//nav//a[@href="${SiteUrls.FORUM}/"]`;
  }

  static get linkClever() {
    return '//nav/a[contains(@href,"clever")]';
  }

  static get linkCurrency() {
    return `//nav//a[@href="${SiteUrls.KURS}/"]`;
  }

  static get linkWeather() {
    return `//nav//a[@href="${SiteUrls.POGODA}/"]`;
  }

  static get textCurrencyRate() {
    return '//nav//span[contains(text(),"$ ")]';
  }

  static get dropdownNews() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  static get dropdownAb() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  static get dropdownRealty() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  static get inputSearch() {
    return '//input[@name="query"]';
  }

  static get modalSearch() {
    return '//div[@id="fast-search-modal"]//iframe';
  }

  static get buttonLogin() {
    return '//div[text()="Вход"]';
  }

  static get buttonFacebook() {
    return '//*[@id="userbar"]//*[@title="Facebook"]';
  }

  static get buttonVk() {
    return '//*[@id="userbar"]//*[@title="ВКонтакте"]';
  }

  static get buttonGoogle() {
    return '//*[@id="userbar"]//*[@title="Google"]';
  }

  static get buttonCart() {
    return '//*[@id="userbar"]//*[@title="Корзина"]';
  }

  static get profileAvatar() {
    return '';
  }

  static get menuProfile() {
    return '//div[@id="userbar"]';
  }

  static get labelAdultContent() {
    return '//nav/div[contains(text(), "18+")]';
  }

  static async getTextFromSearchInput() {
    try {
      const placeholderText = await $(BaseHeader.inputSearch).getAttribute('placeholder');
      const start = placeholderText.indexOf('"') + 1;
      const end = placeholderText.indexOf('"', start + 1);

      return placeholderText.slice(start, end);
    } catch (error) {
      throw new Error(`Текст для поиска на основе плейсхолдера не определён: ${error}`);
    }
  }
}

module.exports = BaseHeader;
