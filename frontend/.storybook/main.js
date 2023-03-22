module.exports = {
  "stories": [
    "../src/**/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/backgrounds/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}
