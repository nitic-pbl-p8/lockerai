/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "airbnb-typescript/base",
    "lockerai-base",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".json"],
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      files: ["./*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
};
