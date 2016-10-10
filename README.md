# eslint-config-yellow-tugboat
Linting rules based on the Yellow Tugboat coding standards.

You can install this module using npm:
`npm install eslint-config-yellow-tugboat`

## About
The linting rules here are primarily further restrictions of `eslint:recommended` with the intent
of creating even more consistent and readable code.

<a name="RulesDef"></a>

## RulesDef : <code>object</code>
**Kind**: global namespace  

* [RulesDef](#RulesDef) : <code>object</code>
    * [.config](#RulesDef.config)
    * [.EslintRule](#RulesDef.EslintRule) : <code>string</code> &#124; <code>array</code>

<a name="RulesDef.config"></a>

### RulesDef.config
The rule configuration.

**Kind**: static constant of <code>[RulesDef](#RulesDef)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| extends | <code>string</code> | Ruleset extends _eslint:recommended_ |
| rules | <code>object</code> | The rules that customize beyond the base set. |
| rules.indent | <code>EslintRule</code> | Require two spaces for consistency. |
| rules.linebreak-style | <code>EslintRule</code> | Use consistent line endings. |
| rules.camelcase | <code>EslintRule</code> | Use consistent variable casing. |
| rules.quotes | <code>EslintRule</code> | Encourage single quotes for consistency. Double quotes are more likely to be quoted and have more visual weight. |
| rules.semi | <code>EslintRule</code> | Semicolons add clarity. |
| rules.comma-dangle | <code>EslintRule</code> | Comma dangles simplify diffs. |
| rules.curly | <code>EslintRule</code> | Curly braces clarify intent. |
| rules.no-caller | <code>EslintRule</code> | Rarely applicable or allowed. |
| rules.brace-style | <code>EslintRule</code> | Use Stroustrup style to create distinct block-sections, but remain somewhat condensed. |
| rules.no-whitespace-before-property | <code>EslintRule</code> | Discourage superfluous whitespace. Inline whitespace should occur only as necessary. |
| rules.no-multi-spaces | <code>EslintRule</code> | Inline whitespace should be simple. |
| rules.no-multiple-empty-lines | <code>EslintRule</code> | Multiple lines create excessive separation removing block context from operation. Many lines for clarity implies refactoring should occur. |
| rules.key-spacing | <code>EslintRule</code> | Have uniform object declarations. |
| rules.no-trailing-spaces | <code>EslintRule</code> | Discourage superfluous whitespace. |
| rules.func-call-spacing | <code>EslintRule</code> | Discourage superfluous whitespace. |
| rules.padded-blocks | <code>EslintRule</code> | Discourage whitespace that separates block context from operations within the block. |
| rules.space-before-blocks | <code>EslintRule</code> | Require separation between keywords and blocks for readability. |
| rules.keyword-spacing | <code>EslintRule</code> | Be consistent and always require it for readability. |
| rules.space-unary-ops | <code>EslintRule</code> | Word operators always need a space to be readable, nonword operators should always be attached to what they are operating on for clarity. |
| rules.spaced-comment | <code>EslintRule</code> | Have standardized comments |
| rules.no-unsafe-negation | <code>EslintRule</code> | Encourage clarity around negation. |
| rules.no-global-assign | <code>EslintRule</code> | Do not allow replacing of built-in values / types. |
| rules.no-var | <code>EslintRule</code> | Use let of const preferred |
| rules.no-floating-decimal | <code>EslintRule</code> | Ensure number clarity |
| rules.no-implicit-globals | <code>EslintRule</code> | Use reasonable scoping |
| rules.no-eval | <code>EslintRule</code> | Avoid dangerous coding |
| rules.no-implied-eval | <code>EslintRule</code> | Avoid dangerous coding |
| rules.no-label-var | <code>EslintRule</code> | Avoid confusion |
| rules.no-labels | <code>EslintRule</code> | Generally should not be used for loops (refactor instead), never allowed for Switch statements |
| rules.max-len | <code>EslintRule</code> | Prevent code from being excessively wide, but allow specific exceptions. |
| rules.max-depth | <code>EslintRule</code> | Prevent overly nested blocks. |
| rules.max-statements | <code>EslintRule</code> | Prevent excessive function length. |
| rules.complexity | <code>EslintRule</code> | Limit cyclomatic complexity |
| rules.no-confusing-arrow | <code>EslintRule</code> | Clarity is important. |
| rules.arrow-parens | <code>EslintRule</code> | Require parens always for consistency. |
| rules.arrow-body-style | <code>EslintRule</code> | Simple arrow expressions are easy to read and can be convenient to read properties. |
| rules.arrow-spacing | <code>EslintRule</code> | Require reasonable whitespace consistent with other spacing rules. |
| rules.no-fallthrough | <code>EslintRule</code> | Require explicit fall through on `Switches`. |
| rules.no-unneeded-ternary | <code>EslintRule</code> | Keep it simple whenever possible. |
| rules.no-lonely-if | <code>EslintRule</code> | Limit unnecessary nesting. |
| rules.no-else-return | <code>EslintRule</code> | Do not use if-else for multiple returns. Use implicit else block to limit visual artifacts or if the dual-block adds clarity then assign output to a temporary variable. |
| rules.no-warning-comments | <code>EslintRule</code> | Don't forget there are 'TODO's and 'FIXME's, but don't error on them just nag. |

<a name="RulesDef.EslintRule"></a>

### RulesDef.EslintRule : <code>string</code> &#124; <code>array</code>
An ESLint rule where a "level" [string](string) is accepted in the simpliest case and [array](array) with
ordered items in the more complex. The items are "level" [string](string), "top-priority value" [any](any),
and "other parameters" [object](object). See ESLint documentation for specific rules.

**Kind**: static typedef of <code>[RulesDef](#RulesDef)</code>  

## License
MIT

## Copyright
&copy; 2016 Yellow Tugboat
