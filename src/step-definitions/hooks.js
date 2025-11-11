import {After, Status} from '@cucumber/cucumber';
import fs from 'node:fs/promises';
import path from 'node:path';

After(async function (scenario) {
  if (scenario.result && scenario.result.status === Status.FAILED) {
    try {
      const screenshot = await browser.takeScreenshot();

      if (globalThis.allure !== undefined) {
        globalThis.allure.addAttachment('Screenshot on Failure', Buffer.from(screenshot, 'base64'), 'image/png');
      }

      const timestamp = new Date().toISOString().replaceAll(/[:.]/g, '-');
      const testName = scenario.pickle.name.replaceAll(/\s+/g, '_');

      const filename = `fail_${testName}_${timestamp}.png`;
      const screenshotsDir = path.join(process.cwd(), 'screenshots');
      const fullPath = path.join(screenshotsDir, filename);

      await fs.mkdir(screenshotsDir, {recursive: true});

      await browser.saveScreenshot(fullPath);
      console.log(`[Cucumber Hook] Скриншот сохранён: ${fullPath}`);
    } catch (err) {
      console.error('[Cucumber Hook] Не удалось сохранить скриншот:', err);
    }
  } else {
    console.log(`[Cucumber Hook] Сценарий завершился со статусом: ${scenario.result.status}`);
  }
});
