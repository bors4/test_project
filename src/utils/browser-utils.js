class BrowserUtils {
  async switchWindow() {
    const parentWindow = await browser.getWindowHandle();
    const windowID = await browser.getWindowHandles();

    try {
      if (windowID.length < 2) {
        throw new Error('Новая вкладка не открыта');
      }

      if (windowID[1] === parentWindow) {
        await browser.switchWindow(windowID[0]);
      } else {
        await browser.switchWindow(windowID[1]);
      }

      await browser.execute((done) => {
        setTimeout(done, 5000);
      });
    } catch (error) {
      throw new Error(`Переход на новую вкладку не выполнен: ${error}`);
    }
  }

  async scrollTo(element) {
    await element.waitForDisplayed();
    await element.scrollIntoView();
    const isElementDisplayed = await element.isDisplayed({withinViewport: true});

    return isElementDisplayed;
  }

  static async browserAction(action) {
    switch (action) {
      case 'обновить':
        browser.refresh();
        break;
      case 'назад':
        browser.back();
        break;
      case 'вперёд':
        browser.forward();
        break;
      default:
        browser.refresh();
    }
  }
}

module.exports = BrowserUtils;
