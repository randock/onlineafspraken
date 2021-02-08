module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "quotes": ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
    "array-bracket-newline": ["error", "consistent"],
    "array-element-newline": ["error", "consistent"],
    "function-call-argument-newline": ["error", "consistent"],
    "semi": "error",
    "no-multi-spaces": "error",
    "semi-spacing": ["error", {"before": false, "after": true}],
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    "object-curly-spacing": ["error", "always", { arraysInObjects: false, objectsInObjects: true}],
    "array-bracket-spacing": ["error", "never", { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
    "computed-property-spacing": ["error", "never"],
    "max-len": ["warn", 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
  },
}
