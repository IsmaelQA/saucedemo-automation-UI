const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000, // 60 seconds
    pageLoadTimeout: 120000,      // 120 seconds
    requestTimeout: 6000,
    responseTimeout: 30000,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // Reporter (mantido)
      require("cypress-mochawesome-reporter/plugin")(on);

      // --------- Carregamento de ambiente por arquivo ---------
      const environmentValue =
        process.env.NODE_ENV || config.env.environmentName || "homolog";

      const environmentFilename = `./cypress/fixtures/config/${environmentValue}.settings.json`;
      const settings = require(environmentFilename);

      // baseUrl do arquivo de ambiente (se existir)
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }

      // Merge das variáveis de ambiente
      if (settings.env) {
        config.env = {
          environmentName: environmentValue,
          ...config.env,
          ...settings.env,
        };
      }

      console.log("[Cypress] Config aplicada:", {
        baseUrl: config.baseUrl,
        env: config.env,
      });

      // --------- Hooks opcionais de pós-execução ---------
      // on("after:run", async (result) => await submitReport(result));

      // --------- Screenshot em falhas (mantido) ---------
      on("after:screenshot", (details) => {
        console.log("Screenshot tirada:", details.path || details.name);
        return Promise.resolve(details);
      });

      // >>> Sem on('task') de banco <<<

      return config;
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Execução da suíte de testes",
    embeddedScreenshots: true,
    inlineAssets: true,
    screenshotsFolder: "cypress/reports/screenshots",
    overwrite: true,
    html: true,
    json: true,
    saveJson: true,
  },

  video: false,
});