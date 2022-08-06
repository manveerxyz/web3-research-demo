module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:security/recommended",
    "airbnb-typescript/base",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.eslint.json",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "security",
  ],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "warn",
    "comma-dangle": "off",
    "constructor-super": "error",
    eqeqeq: ["warn", "always"],
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/prefer-default-export": "off",
    "import/no-unassigned-import": "warn",
    "no-cond-assign": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-invalid-this": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-redeclare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-throw-literal": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "warn",
    "no-void": "error",
    "prefer-const": "warn",
    "prefer-destructuring": "off",
    "max-len": [
      "warn",
      {
        "code": 120,
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true,
      },
    ],
    "security/detect-non-literal-fs-filename": "off",
  },
  overrides: [
    {
      "files": ["*.test.ts"],
      "rules": {
          "@typescript-eslint/no-unused-expressions": "off",
          "global-require": "off",
      }
    }
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return",
      },
    },
  },
};
