module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "react-refresh",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "prefer-const": "off",
  },
};
