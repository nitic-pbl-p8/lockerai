/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript",
    "lockerai-esm",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["jsx-a11y", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "tv"],
      classRegex: "^(class|className|outsideClass)$",
      ignoredKeys: ["compoundSlots", "defaultVariants"],
    },
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
    {
      files: ["./.storybook/*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
    {
      files: ["./**/*.story.*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
};
