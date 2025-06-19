export async function setExecuteTimeout(timeToWait) {
	await browser.executeAsync((done) => {
		setTimeout(done, timeToWait);
	});
}
