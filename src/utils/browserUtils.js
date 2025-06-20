class BrowserUtils {
	constructor() {}

	async switchWindow() {
		const parrentWindow = await browser.getWindowHandle();
		const windowID = await browser.getWindowHandles();
		try {
			if (windowID.lenght < 2) {
				throw new Error("Новая вкладка не открыта");
			}
			windowID[1] == parrentWindow
				? await browser.switchWindow(windowID[0])
				: await browser.switchWindow(windowID[1]);
			await browser.executeAsync((done) => {
				setTimeout(done, 10000);
			});
		} catch (error) {
			throw new Error("Переход на новую вкладку не выполнен");
		}
	}

	async setExecuteTimeout(timeToWait) {
		await browser.executeAsync((done) => {
			setTimeout(done, timeToWait);
		});
	}

	async scrollTo(element) {
		await element.scrollIntoView();
		element.isDisplayed({ withinViewport: true });
	}

	async browserAction(action) {
		switch (action) {
			case "обновить":
				browser.refresh();
				break;
			case "назад":
				browser.back();
				break;
			case "вперёд":
				browser.forward();
				break;
		}
	}
}

module.exports = BrowserUtils;
