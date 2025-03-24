import { expect, test } from "@playwright/test";
import path from 'path';
import storybook from '../storybook-static/index.json' with {type: 'json'};


const stories = Object.values(storybook.entries).filter((e) => e.type === 'story')

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regression`, async ({
    page
  }, workerInfo) => {
    const filePath = path.join(
      __dirname, 
      '../storybook-static/iframe.html'
    );
    
    await page.goto(`file://${filePath}?id=${story.id}&viewMode=story`, {
      waitUntil: 'networkidle'
    });

    await page.waitForSelector("#storybook-root", {
      state: 'attached',
      timeout: 15000
    });

    await expect(page).toHaveScreenshot(
      [process.platform, story.title, story.name, `${workerInfo.project.name}.png`],
      {
        fullPage: true,
        animations: "disabled",
        timeout: 10000
      }
    );
  })
}
