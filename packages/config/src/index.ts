import type { ESLint, Linter } from 'eslint';
import parserServicePlugin from 'eslint-plugin-ts-parser-service';

const resolverConfig: Linter.Config[] = [
  parserServicePlugin.configs.listen,
  {
    settings: {
      'import/resolver': require.resolve('eslint-import-resolver-ts-parser-service'),
    },
  }
];

const plugin = {
  configs: {
    resolver: resolverConfig,
  } ,
} satisfies ESLint.Plugin;

export = plugin;
