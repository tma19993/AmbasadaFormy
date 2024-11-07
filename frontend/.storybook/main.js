const path = require('path');

module.exports = {
  stories: [
    "../src/**/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  angularOptions: {
    enableIvy: true,
    enableStandaloneComponents: true,
  },
  docs: {
    autodocs: true
  },
};
