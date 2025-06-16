export async function setExecuteTimeout(timeToWait) {
	const timeout = 3000;
	await browser.executeAsync((done) => {
		setTimeout(done, 3000);
	});
}
