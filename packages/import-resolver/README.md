# eslint-import-resolver-ts-parser

[![npm Package](https://img.shields.io/npm/v/eslint-import-resolver-ts-parser?logo=npm "eslint-import-resolver-ts-parser")](https://www.npmjs.com/package/eslint-import-resolver-ts-parser)

Resolver using [@typescript-eslint](https://github.com/typescript-eslint) parser service. Plugin for [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import).

This plugin reads options from `@typescript-eslint` parser service, and then uses `typescript` compiler APIs to resolve paths. It can resolve whatever `typescript` can resolve.

## Installation

```shell
npm i -D eslint-import-resolver-ts-parser
```

### Set up the parser

Make sure you've got the `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` working. Check out their [documentations](https://typescript-eslint.io/docs/linting/).

### Attach listener

[Extend](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) your eslint config with `plugin:ts-parser-service/listen`. For example,

```json5
// .eslintrc.json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:ts-parser-service/listen",
  ]
}
```

[`eslint-plugin-ts-parser-service`](https://www.npmjs.com/package/eslint-plugin-ts-parser-service) helps us get the parser service serving the parsing file.

### Configure resolver

Set `ts-parser` as the [`import/resolver`](https://github.com/import-js/eslint-plugin-import#resolvers). For example,

```json5
// .eslintrc.json
{
  // ...
  "settings": {
    "import/resolver": "ts-parser"
  }
}
```
