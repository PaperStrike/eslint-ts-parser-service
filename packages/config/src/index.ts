import type { ESLint, Linter } from 'eslint';
import parserServicePlugin from 'eslint-plugin-ts-parser-service';

const resolverConfig: Linter.Config[] = [
  parserServicePlugin.configs.listen,
  {
    settings: {
      'import/resolver': 'ts-parser-service',
    },
  }
];

export default {
  configs: {
    resolver: resolverConfig,
  } ,
} satisfies ESLint.Plugin;
