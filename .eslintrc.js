module.exports = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  plugins: ["jest", "react", "cypress", "@typescript-eslint"],
  env: { browser: true, "cypress/globals": true, "jest/globals": true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
