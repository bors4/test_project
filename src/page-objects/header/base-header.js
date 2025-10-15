import * as SiteUrls from '../../config/site-urls.js';

class BaseHeader {
  static SiteUrls = SiteUrls;

  constructor() {
    this.elements = {
      'Лого сайта': this.siteLogo,
      'Ссылка Каталог': this.linkCatalog,
      'Ссылка Новости': this.linkNews,
      'Ссылка Автобарахолка': this.linkAb,
      'Ссылка Дома и квартиры': this.linkRealty,
      'Ссылка Услуги': this.linkTasks,
      'Ссылка Барахолка': this.linkBaraholka,
      'Ссылка Форум': this.linkForum,
      'Ссылка Onliner Клевер': this.linkClever,
      'Ссылка Курсы валют': this.linkCurrency,
      'Ссылка Погода': this.linkWeather,
      'Текст курс доллара': this.textCurrencyRate,
      'Дропдаун Новости': this.dropdownNews,
      'Дропдаун Автобарахолка': this.dropdownAb,
      'Дропдаун Дома и квартиры': this.dropdownRealty,
      'Поле поиска': this.inputSearch,
      'Модальное окно поиска': this.modalSearch,
      'Кнопка Вход': this.buttonLogin,
      'Кнопка Facebook': this.buttonFacebook,
      'Кнопка Vkontakte': this.buttonVk,
      'Кнопка Google': this.buttonGoogle,
      'Кнопка Корзина': this.buttonCart,
      'Аватар профиля': this.profileAvatar,
      'Меню профиля': this.menuProfile,
      '18+': this.labelAdultContent,
    };
  }

  get siteLogo() {
    return `//div//a[@href="${SiteUrls.HOME_URL}"]/img`;
  }

  get linkCatalog() {
    return `//nav//a[@href="${SiteUrls.CATALOG_URL}"]`;
  }

  get linkNews() {
    return `//div//a[@href="${SiteUrls.HOME_URL}"]//span[.="Новости"]`;
  }

  get linkAb() {
    return `//nav//a[@href="${SiteUrls.AB_URL}"]//span[.="Автобарахолка"]`;
  }

  get linkRealty() {
    return `//nav//li/a[@href="${SiteUrls.R_URL}/pk"]`;
  }

  get linkTasks() {
    return `//nav//a[@href="${SiteUrls.TASKS_URL}"]/span[.="Услуги"]`;
  }

  get linkBaraholka() {
    return `//nav//a[@href="${SiteUrls.BARAHOLKA_URL}"]//span[.="Барахолка"]`;
  }

  get linkForum() {
    return `//nav//a[@href="${SiteUrls.FORUM_URL}/"]`;
  }

  get linkClever() {
    return '//nav/a[contains(@href,"clever")]';
  }

  get linkCurrency() {
    return `//nav//a[@href="${SiteUrls.KURS_URL}/"]`;
  }

  get linkWeather() {
    return `//nav//a[@href="${SiteUrls.POGODA_URL}/"]`;
  }

  get textCurrencyRate() {
    return '//nav//span[contains(text(),"$ ")]';
  }

  get dropdownNews() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  get dropdownAb() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  get dropdownRealty() {
    return '//*[contains(@class, "b-main-navigation__dropdown_visible")]';
  }

  get inputSearch() {
    return '//input[@name="query"]';
  }

  get modalSearch() {
    return '//div[@id="fast-search-modal"]//iframe';
  }

  get buttonLogin() {
    return '//div[text()="Вход"]';
  }

  get buttonFacebook() {
    return '//*[@id="userbar"]//*[@title="Facebook"]';
  }

  get buttonVk() {
    return '//*[@id="userbar"]//*[@title="ВКонтакте"]';
  }

  get buttonGoogle() {
    return '//*[@id="userbar"]//*[@title="Google"]';
  }

  get buttonCart() {
    return '//*[@id="userbar"]//*[@title="Корзина"]';
  }

  get profileAvatar() {
    return '';
  }

  get menuProfile() {
    return '//div[@id="userbar"]';
  }

  get labelAdultContent() {
    return '//nav/div[contains(text(), "18+")]';
  }

  async getTextFromSearchInput() {
    try {
      const placeholderText = await $(this.inputSearch).getAttribute('placeholder');
      const start = placeholderText.indexOf('"') + 1;
      const end = placeholderText.indexOf('"', start + 1);

      return placeholderText.slice(start, end);
    } catch (error) {
      throw new Error(`Текст для поиска на основе плейсхолдера не определён: ${error}`);
    }
  }
}

export default BaseHeader;
