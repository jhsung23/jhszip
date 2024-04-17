module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:import/react",
    "prettier",
  ],
  plugins: ["import"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "sibling"],
        pathGroups: [
          {
            pattern: "{react}",
            group: "builtin",
            position: "after",
          },
          {
            patternOptions: "./*",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
