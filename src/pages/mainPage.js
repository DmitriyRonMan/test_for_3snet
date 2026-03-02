class MainPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://dev.3snet.info/eventswidget/';
  }

  async open() {
    await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
  }

  // Локаторы / геттеры
  get headerTitle() {
    return this.page.getByText('Начните создавать свой календарь мероприятий!', {
      exact: false,
    });
  }

  get stepTexts() {
    return ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4'];
  }

  get topicBlockTitle() {
    return this.page.getByText('Выберите тематику', { exact: false });
  }

  get countriesBlockTitle() {
    return this.page.getByText('Выберите страны', { exact: false });
  }

  get generatePreviewButton() {
    return this.page.getByText('Сгенерировать превью', { exact: false });
  }

  get embedCodeTitle() {
    return this.page.getByText('Скопируйте сгенерированный код', { exact: false });
  }

  get copyCodeButton() {
    return this.page.getByText('Скопировать код', { exact: false });
  }

  topicLocatorByName(name) {
    return this.page.getByText(name, { exact: false });
  }
}

module.exports = { MainPage };

