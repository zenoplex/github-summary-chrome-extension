module.exports =
{
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    'chrome': true
  },
  env: {
    'browser': true,
    'node': true,
    'mocha': true
  },
  rules: {
    'key-spacing': 0,
    'no-console': 0,
    'global-require': 0,
    'no-new': 0,
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        '/^(props|state)$/',
        'lifecycle',
        'everything-else',
        'render',
      ]
    }]
  },
  plugins: [
    'react',
    'flow-vars',
  ],
  settings: {
    'import/resolver': 'webpack'
  }
};
