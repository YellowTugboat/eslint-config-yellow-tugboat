module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    // General Formatting
    'indent': [ 'error', 2 ], // Require two spaces for consistency
    'linebreak-style': [ 'error', 'unix' ], // Use consistent line endings.
    'camelcase': 'error', // Use consistent variable casing.
    'quotes': [ 'error', 'single' ], // Encourage single quotes for consistency. Double quotes are more likely to be quoted and have more visual weight.
    'semi': [ 'error', 'always' ], // Semicolons add clarity.
    'comma-dangle': [ 'error', 'always-multiline' ], // Comma dangles simplify diffs.
    'curly': 'error', // Curly braces clarify intent.
    'no-caller': 'error', // Rarely applicable or allowed.
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }], // Use Stroustrup style to create distinct block-sections, but remain somewhat condensed.

    // Whitespace
    'no-whitespace-before-property': 'error', // Discourage superfluous whitespace. Inline whitespace should occur only as necessary.
    'no-multi-spaces': 'error', // Inline whitespace should be simple.
    'no-multiple-empty-lines': 'error', // Multiple lines create excessive separation removing block context from operation. Many lines for clarity implies refactoring should occur.
    'key-spacing': 'error', // Have uniform object declarations.
    'no-trailing-spaces': 'error', // Discourage superfluous whitespace.
    'func-call-spacing': 'error', // Discourage superfluous whitespace.
    'padded-blocks': ['error', 'never'], // Discourage whitespace that separates block context from operations within the block.
    'space-before-blocks': 'error', // Require separation between keywords and blocks for readability.
    'keyword-spacing': 'error', // Be consistent and always require it for readability.
    'space-unary-ops': 'error', // Word operators always need a space to be readable, nonword operators should always be attached to what they are operating on for clarity.
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
    }], // Have standardized comments

    // Code features
    'no-unsafe-negation': 'error', // Encourage clarity around negation.
    'no-global-assign': 'error', // Do not allow replacing of built-in values / types.
    'no-var': 'error',  // Use let of const preferred
    'no-floating-decimal': 'error', // Ensure number clarity
    'no-implicit-globals': 'error', // Use reasonable scoping
    'no-eval': 'error', // Avoid dangerous coding
    'no-implied-eval': 'error', // Avoid dangerous coding
    'no-label-var': 'error', // Avoid confusion
    'no-labels': ['error', { 'allowLoop': true }], // Generally should not be used for loops (refactor instead), never allowed for Switch statements
    'max-len': ['error', {
      'code': 100,
      'tabWidth': 2,  // Set to match indent, but no tabs are expected to be used.
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }], // Prevent code from being excessively wide, but allow specific exceptions.
    'max-depth': 'error',
    'max-statements': ['error', 20], // Prevent excessive function length.
    'complexity': ['error', 15], // Limit cyclomatic complexity


    // Arrow Functions
    'no-confusing-arrow': ['error', {'allowParens': false}], // Clarity is important.
    'arrow-parens': 'error',  // Require parens always for consistency.
    'arrow-body-style': ['error', 'as-needed'], // Simple arrow expressions are easy to read and can be convenient to read properties.
    'arrow-spacing': 'error', // Require reasonable whitespace consistent with other spacing rules.

    // Switch Statements
    // Switches are generally discouraged, but should be done as safe and explicitly as possible.
    'no-fallthrough': 'error', // Require explicit fall through.

    // If Statements
    'no-unneeded-ternary': 'error', // Keep it simple whenever possible.
    'no-lonely-if': 'error', // Limit unnecessary nesting.
    'no-else-return': 'error',  // Do not use if-else for multiple returns. Use implicit else block to limit visual artifacts or if the dual-block adds clarity then assign output to a temporary variable.

    // Reminders
    'no-warning-comments': 'warn', // Don't forget there are 'TODO's and 'FIXME's, but don't error on them just nag.
  },
};
