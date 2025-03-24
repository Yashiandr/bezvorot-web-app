import { expect, test } from "@playwright/test";
import { ChildProcess, spawn } from "child_process";
import storybook from "../storybook-static/index.json" with { type: "json" };

const stories = Object.values(storybook.entries).filter((e) => e.type === "story");

// Запускаем сервер перед тестами
let serverProcess: ChildProcess | null = null;

test.beforeAll(async () => {
  serverProcess = spawn("npx", ["http-server", "storybook-static", "-p", "6006"], {
    stdio: "inherit",
    shell: true,
  });

  // Дадим серверу время на запуск
  await new Promise((resolve) => setTimeout(resolve, 3000));
});

// Останавливаем сервер после всех тестов
test.afterAll(() => {
  if (serverProcess) {
    serverProcess.kill();
  }
});

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regression`, async ({ page }, workerInfo) => {
    await page.goto(`http://localhost:6006/iframe.html?id=${story.id}&viewMode=story`, {
      waitUntil: "networkidle",
    });

    await page.waitForSelector("#storybook-root > *", { state: "visible", timeout: 15000 });

    await page.evaluate(async () => {
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
