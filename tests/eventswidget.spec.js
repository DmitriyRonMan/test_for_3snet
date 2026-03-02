const { test, expect } = require('@playwright/test');
const { MainPage } = require('../src/pages/mainPage');

test.describe('Конструктор календаря мероприятий 3snet', () => {
  test('Страница загружается и отображает заголовок и основные шаги', async ({ page }) => {
    const mainPage = new MainPage(page);

    await test.step('Открыть страницу конструктора мероприятий', async () => {
      await mainPage.open();
    });
    await test.step('Проверить заголовок страницы', async () => {
      await expect(mainPage.headerTitle).toBeVisible();
    });
    await test.step('Проверить наличие шагов мастера 1–4', async () => {
      for (const stepText of mainPage.stepTexts) {
        await expect(page.getByText(stepText, { exact: false })).toBeVisible();
      }
    });
  });

  test('основные элементы фильтрации по тематике и странам доступны', async ({ page }) => {
    const mainPage = new MainPage(page);

    await test.step('Открыть страницу конструктора мероприятий', async () => {
      await mainPage.open();
    });
    await test.step('Проверить заголовки блоков фильтрации по тематике и странам', async () => {
      await expect(mainPage.topicBlockTitle).toBeVisible();
      await expect(mainPage.countriesBlockTitle).toBeVisible();
    });
    await test.step('Проверить наличие тематик в DOM', async () => {
      for (const topic of ['Affiliate', 'Blockchain', 'Development', 'Igaming', 'Internet Marketing', 'SEO', 'Финтех']) {
        const topicLocator = mainPage.topicLocatorByName(topic);
        const count = await topicLocator.count();
        expect(count).toBeGreaterThan(0);
      }
    });
  });

  test('можно сгенерировать превью и отобразить код вставки', async ({ page }) => {
    const mainPage = new MainPage(page);

    await test.step('Открыть страницу конструктора мероприятий', async () => {
      await mainPage.open();
    });
    await test.step('Найти и нажать кнопку «Сгенерировать превью»', async () => {
      await expect(mainPage.generatePreviewButton).toBeVisible();
      await mainPage.generatePreviewButton.click();
    });
    await test.step('Проверить появление блока с кодом вставки', async () => {
      await expect(mainPage.embedCodeTitle).toBeVisible();
      await expect(mainPage.copyCodeButton).toBeVisible();
    });
  });
});

