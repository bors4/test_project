class BrowserUtils {
	constructor() {}

	async switchWindow() {
		const parentWindow = await browser.getWindowHandle();
		const windowID = await browser.getWindowHandles();
		try {
			if (windowID.length < 2) {
				throw new Error('Новая вкладка не открыта');
			}
			windowID[1] == parentWindow ? await browser.switchWindow(windowID[0]) : await browser.switchWindow(windowID[1]);
			await browser.execute((done) => {
				setTimeout(done, 5000);
			});
		} catch (error) {
			throw new Error('Переход на новую вкладку не выполнен');
		}
	}

	async setExecuteTimeout(timeToWait) {
		await browser.execute((done) => {
			setTimeout(done, 3000);
		});
	}

	async scrollTo(element) {
		await element.scrollIntoView();
		element.isDisplayed({ withinViewport: true });
	}

	async browserAction(action) {
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
		}
	}
}

module.exports = BrowserUtils;
