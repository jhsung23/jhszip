module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-refresh",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
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
