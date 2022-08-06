// eslint-disable-next-line @typescript-eslint/no-var-requires
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc; }, {});

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-redux',
    'react-hooks',
  ],
  rules: {
    // disable accessibility for now, TODO: this should be re-enabled and fixed
    ...a11yOff,
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'testing-library/prefer-screen-queries': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'function-paren-newline': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
