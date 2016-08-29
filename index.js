module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'curly': 'error',
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'no-caller': 'error',
    'no-confusing-arrow': ['error', {'allowParens': false}],
    'arrow-parens': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-var': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      'line': {
        'markers': ['/'],
        'exceptions': ['-'],
      },
      'block': {
        'markers': ['!'],
        'exceptions': ['*'],
        'balanced': true,
      },
    }],
  },
};
