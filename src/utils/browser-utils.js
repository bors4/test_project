/**
 * Переключение между окнами браузера
 */
export async function switchWindow() {
  const parentWindow = await browser.getWindowHandle();
  const windowID = await browser.getWindowHandles();
  if (windowID.length < 2) throw new Error('Новая вкладка не открыта');
  const targetWindow = windowID.find((id) => id !== parentWindow) || windowID[0];
  await browser.switchWindow(targetWindow);
}

/**
 * Прокручивает страницу к указанному элементу
 * @param {WebdriverIO.Element} element - Элемент, к которому нужно прокрутить страницу
 * @returns {Promise<boolean>} Виден ли элемент в области просмотра после прокрутки
 */
export async function scrollTo(element) {
  await element.waitForDisplayed();
  await element.scrollIntoView();

  return element.isDisplayed({ withinViewport: true });
}

/**
 * Выполняет навигационные действия браузера
 * @param {'обновить' | 'назад' | 'вперёд'} action - Тип навигационного действия
 */
export async function browserAction(action) {
  const navigationActions = {
    обновить: () => browser.refresh(),
    назад: () => browser.back(),
    вперёд: () => browser.forward(),
  };

  const executeAction = navigationActions[action] || navigationActions.обновить;
  await executeAction();
}
