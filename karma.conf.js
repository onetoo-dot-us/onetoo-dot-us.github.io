module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      {
        pattern: "**/*.test.js",
        type: "module",
        included: true,
      },
      { pattern: "**/*.js", type: "module", included: false },
    ],
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
    ],
    exclude: [],
    preprocessors: {},
    reports: ["spec"],
    port: 5500,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "Firefox"],
    singleRun: true,
    concurrency: Infinity,
  });
};
