# eslint-plugin-ts-parser-service

[![npm Package](https://img.shields.io/npm/v/eslint-plugin-ts-parser-service?logo=npm "eslint-plugin-ts-parser-service")](https://www.npmjs.com/package/eslint-plugin-ts-parser-service)

Find the running [@typescript-eslint](https://github.com/typescript-eslint) parser service.

This adds a dummy TS rule to eslint that does nothing but expose the TS parser service.

## Example

See [`eslint-import-resolver-ts-parser-service`](https://github.com/PaperStrike/eslint-import-resolver-ts-parser/tree/main/packages/import-resolver) for a complete example.

```json5
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:ts-parser-service/listen", // <- spy
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
  ],
  "root": true,
}
```

```ts
// index.ts
import { getParserServices } from 'eslint-plugin-ts-parser-service/listener';

getParserServices(); // -> TS ParserServices
```
