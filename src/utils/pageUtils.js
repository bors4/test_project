export async function setExecuteTimeout(timeout) {
    browser.executeAsync((done) => {
        setTimeout(done, timeout);
    });
}