/**
 * @namespace RulesDef
 */

/**
 * An ESLint rule where a "level" {@link string} is accepted in the simpliest case and {@link array} with
 * ordered items in the more complex. The items are "level" {@link string}, "top-priority value" {@link any},
 * and "other parameters" {@link object}. See ESLint documentation for specific rules.
 * @typedef {(string|array)} EslintRule
 * @memberof RulesDef
 */

/**
 * The rule configuration.
 * @memberof RulesDef
 * @prop {string} extends - Ruleset extends _eslint:recommended_
 * @prop {object} rules - The rules that customize beyond the base set.
 * @prop {EslintRule} rules.indent - Require two spaces for consistency.
 * @prop {EslintRule} rules.linebreak-style - Use consistent line endings.
 * @prop {EslintRule} rules.camelcase - Use consistent variable casing.
 * @prop {EslintRule} rules.quotes - Encourage single quotes for consistency. Double quotes are more likely to be quoted and have more visual weight.
 * @prop {EslintRule} rules.semi - Semicolons add clarity.
 * @prop {EslintRule} rules.comma-dangle - Comma dangles simplify diffs.
 * @prop {EslintRule} rules.curly - Curly braces clarify intent.
 * @prop {EslintRule} rules.no-caller - Rarely applicable or allowed.
 * @prop {EslintRule} rules.brace-style - Use Stroustrup style to create distinct block-sections, but remain somewhat condensed.
 * @prop {EslintRule} rules.no-whitespace-before-property - Discourage superfluous whitespace. Inline whitespace should occur only as necessary.
 * @prop {EslintRule} rules.no-multi-spaces - Inline whitespace should be simple.
 * @prop {EslintRule} rules.no-multiple-empty-lines - Multiple lines create excessive separation removing block context from operation. Many lines for clarity implies refactoring should occur.
 * @prop {EslintRule} rules.key-spacing - Have uniform object declarations.
 * @prop {EslintRule} rules.no-trailing-spaces - Discourage superfluous whitespace.
 * @prop {EslintRule} rules.func-call-spacing - Discourage superfluous whitespace.
 * @prop {EslintRule} rules.padded-blocks - Discourage whitespace that separates block context from operations within the block.
 * @prop {EslintRule} rules.space-before-blocks - Require separation between keywords and blocks for readability.
 * @prop {EslintRule} rules.keyword-spacing - Be consistent and always require it for readability.
 * @prop {EslintRule} rules.space-unary-ops - Word operators always need a space to be readable, nonword operators should always be attached to what they are operating on for clarity.
 * @prop {EslintRule} rules.spaced-comment - Have standardized comments
 * @prop {EslintRule} rules.no-unsafe-negation - Encourage clarity around negation.
 * @prop {EslintRule} rules.no-global-assign - Do not allow replacing of built-in values / types.
 * @prop {EslintRule} rules.no-var - Use let of const preferred
 * @prop {EslintRule} rules.no-floating-decimal - Ensure number clarity
 * @prop {EslintRule} rules.no-implicit-globals - Use reasonable scoping
 * @prop {EslintRule} rules.no-eval - Avoid dangerous coding
 * @prop {EslintRule} rules.no-implied-eval - Avoid dangerous coding
 * @prop {EslintRule} rules.no-label-var - Avoid confusion
 * @prop {EslintRule} rules.no-labels - Generally should not be used for loops (refactor instead), never allowed for Switch statements
 * @prop {EslintRule} rules.max-len - Prevent code from being excessively wide, but allow specific exceptions.
 * @prop {EslintRule} rules.max-depth - Prevent overly nested blocks.
 * @prop {EslintRule} rules.max-statements - Prevent excessive function length.
 * @prop {EslintRule} rules.complexity - Limit cyclomatic complexity
 * @prop {EslintRule} rules.no-confusing-arrow - Clarity is important.
 * @prop {EslintRule} rules.arrow-parens - Require parens always for consistency.
 * @prop {EslintRule} rules.arrow-body-style - Simple arrow expressions are easy to read and can be convenient to read properties.
 * @prop {EslintRule} rules.arrow-spacing - Require reasonable whitespace consistent with other spacing rules.
 * @prop {EslintRule} rules.no-fallthrough - Require explicit fall through on `Switches`.
 * @prop {EslintRule} rules.no-unneeded-ternary - Keep it simple whenever possible.
 * @prop {EslintRule} rules.no-lonely-if - Limit unnecessary nesting.
 * @prop {EslintRule} rules.no-else-return - Do not use if-else for multiple returns. Use implicit else block to limit visual artifacts or if the dual-block adds clarity then assign output to a temporary variable.
 * @prop {EslintRule} rules.no-warning-comments - Don't forget there are 'TODO's and 'FIXME's, but don't error on them just nag.
 */
const config = {
  'extends': 'eslint:recommended',
  'rules': {
    // General Formatting
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'camelcase': 'error',
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'curly': 'error',
    'no-caller': 'error',
    'brace-style': [ 'error', 'stroustrup', {
      'allowSingleLine': true
    }],

    // Whitespace
    'no-whitespace-before-property': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'func-call-spacing': 'error',
    'padded-blocks': [ 'error', 'never' ],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [ 'error', 'always', {
      'line': {
        'markers': [ '/' ],
        'exceptions': [ '-' ],
      },
      'block': {
        'markers': [ '!' ],
        'exceptions': [ '*' ],
        'balanced': true,
      },
    }],

    // Code features
    'no-unsafe-negation': 'error',
    'no-global-assign': 'error',
    'no-var': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-label-var': 'error',
    'no-labels': [ 'error', {
      'allowLoop': true
    }],
    'max-len': [ 'error', {
      'code': 100,
      'tabWidth': 2,  // Set to match indent, but no tabs are expected to be used.
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'max-depth': 'error',
    'max-statements': [ 'error', 20 ],
    'complexity': [ 'error', 15 ],


    // Arrow Functions
    'no-confusing-arrow': [ 'error', {
      'allowParens': true
    }],
    'arrow-parens': 'error',
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',

    // Switch Statements
    // Switches are generally discouraged, but should be done as safe and explicitly as possible.
    'no-fallthrough': 'error',

    // If Statements
    'no-unneeded-ternary': 'error',
    'no-lonely-if': 'error',
    'no-else-return': 'error',

    // Reminders
    'no-warning-comments': 'warn',
  },
};

module.exports = config;

