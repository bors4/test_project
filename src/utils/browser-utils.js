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
 * Скролл к элементу
 */
export async function scrollTo(element) {
  await element.waitForDisplayed();
  await element.scrollIntoView();

  return await element.isDisplayed({withinViewport: true});
}

/**
 * Действия браузера
 */
export async function browserAction(action) {
  switch (action) {
    case 'обновить':
      await browser.refresh();
      break;
    case 'назад':
      await browser.back();
      break;
    case 'вперёд':
      await browser.forward();
      break;
    default:
      await browser.refresh();
  }
}
