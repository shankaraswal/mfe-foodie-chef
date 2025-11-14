const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");
const { fixupConfig } = require("@eslint/compat");

module.exports = tseslint.config(
  { ignores: ["**/node_modules/", "dist/"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfig(pluginReactConfig),
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
