import { expect, test } from "@playwright/test";
import storybook from '../storybook-static/index.json' with {type: 'json'};

const stories = Object.values(storybook.entries).filter((e) => e.type === 'story')

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regression`, async ({
    page
  }, workerInfo) => {
    const params = new URLSearchParams({
      id: story.id,
      viewMode: "story",
    })

    await page.goto(`/iframe.html?${params.toString()}`);
    await page.waitForSelector("#storybook-root");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(
      [process.platform, story.title,story.name, `${workerInfo.project.name}.png`],
      {
        fullPage: true,
        animations: "disabled"
      }
    )
  })
}
