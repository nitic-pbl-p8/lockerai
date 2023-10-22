/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier", "plugin:json/recommended"],
  plugins: ["import", "prettier", "json"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "json/*": ["error", "allowComments"],
    "import/extensions": "off",
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": ["error", { packageDir: ["./"] }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "~*/**",
            group: "internal",
          },
          {
            pattern: "#*/**",
            group: "internal",
          },
          {
            pattern: "@/**",
            group: "parent",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/prefer-default-export": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../"],
      },
    ],
    "no-useless-constructor": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  overrides: [
    {
      files: ["./*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
};
