// @see https://prettier.io/docs/en/options
module.exports = {
  printWidth: 120,

  tabWidth: 2,
  bracketSpacing: true,

  arrowParens: "always",

  endOfLine: "lf",

  singleQuote: false,

  trailingComma: "all",

  semi: true,

  useTabs: false,
  overrides: [
    {
      files: "*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
};
