const elements = {
	'Фрейм Окно поиска': '//*[@id="fast-search-modal"]//iframe',
};

/**
 * Функция `switchToIFrame` проверяет в каком контексте находится фокус и переключает на противоположный.
 * @param {string} sourceContext - параметр `sourceContext` принимает в качестве значения "iframe" или "родительский"
 * описывающие контекст, на который необходимо переключиться.
 */

export async function switchToIFrame(sourceContext) {
	const iframe = await $(elements[sourceContext]);
	await iframe.waitForDisplayed({ timeout: 10000 });
	await browser.switchFrame(iframe);
	const currentContext = await browser.execute(() => {
		return window.self === window.top ? 'main' : 'iframe';
	});
	console.log(`Текущий контекст: ${currentContext}`);
}

/**
 * Функция `switchToParent` служит для переключения на родительский контекст при обращении к iframe
 */
export async function switchToParent() {
	await browser.switchToParentFrame();
	console.log(`Текущий контекст: родительский`);
}
