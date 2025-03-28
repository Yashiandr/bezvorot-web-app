import { expect, test } from "@playwright/test";
import storybook from "../storybook-static/index.json" with { type: "json" };

const stories = Object.values(storybook.entries).filter((e) => e.type === "story");

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regression`, async ({ page }, workerInfo) => {
    await page.goto(`http://172.17.0.1:6006/iframe.html?id=${story.id}&viewMode=story`, {
      waitUntil: "networkidle",
    });

    await page.waitForSelector("#storybook-root > *", { state: "visible", timeout: 1000 });

    await page.evaluate(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.fonts && await document.fonts.ready;
    });

    await page.waitForLoadState("domcontentloaded");

    await expect(page).toHaveScreenshot(
      [process.platform, story.title, story.name, `${workerInfo.project.name}.png`],
      {
        fullPage: true,
        animations: "disabled",
        timeout: 10000,
      }
    );
  });
}