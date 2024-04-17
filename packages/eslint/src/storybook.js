module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
