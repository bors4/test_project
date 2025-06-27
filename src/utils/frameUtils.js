const elements = {
	"фрейм окно поиска": '//*[@id="fast-search-modal"]/div/div/iframe'
};

export async function switchToIFrame(sourceContext) {
	const iframe = await $(elements[sourceContext]);
	await iframe.waitForDisplayed();
	await browser.switchFrame(iframe);
	const currentContext = await browser.execute(() => {
		return window.self === window.top ? "main" : "iframe";
	});
	console.log(`Текущий контекст: ${currentContext}`);
}

export async function switchToParent() {
	await browser.switchToParentFrame();
	console.log(`Текущий контекст: родительский`);
}
