const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Ваши обработчики событий здесь
      return config
    },
    supportFile: 'cypress/support/e2e.js', // Если вы не используете файл поддержки
    'specPattern': 'test/**/*.cy.{js,jsx,ts,tsx}', // Шаблон для поиска тестовых файлов
    pageLoadTimeout: 60000
  },
})