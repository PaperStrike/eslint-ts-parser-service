# eslint-config-ts-parser-service

[![npm Package](https://img.shields.io/npm/v/eslint-config-ts-parser-service?logo=npm "eslint-config-ts-parser-service")](https://www.npmjs.com/package/eslint-config-ts-parser-service)

Easily configure ESLint to use the [@typescript-eslint](https://github.com/typescript-eslint) parser service to resolve import paths.

## Installation

```shell
npm i -D eslint-config-ts-parser-service
```

### Set up the parser

Make sure you've got the `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` working. Check out their [documentations](https://typescript-eslint.io/docs/linting/).

## Features

Currently, this package only provides a resolver for import paths. More features may be added in the future.

### Resolver

Let [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) use the parser service to resolve import paths by simply [extending](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) your eslint config with `ts-parser-service/resolver`. For example,

```json5
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "ts-parser-service/resolver", // <- Add this
  ]
}
```
