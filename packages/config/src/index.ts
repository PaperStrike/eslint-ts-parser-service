import type { ESLint, Linter } from 'eslint';
import parserServicePlugin from 'eslint-plugin-ts-parser-service';

const resolverConfig: Linter.Config[] = [
  parserServicePlugin.configs.listen,
  {
    settings: {
      'import/resolver': require.resolve('eslint-import-resolver-ts-parser-service'),
      'import/parsers': {
        // The typescript config of eslint-plugin-import hardcodes @typescript-eslint/parser
        // for TS extensions. This is redundant for our users since they already have
        // @typescript-eslint/parser configured as a prerequisite for this package.
        // We override with an empty list to avoid the extra parser resolution overhead.
        // This is safe because import/parsers only controls which parser eslint-plugin-import
        // uses internally for module analysis — it doesn't affect the actual lint parse.
        '@typescript-eslint/parser': [],
      },
    },
  }
];

const plugin = {
  configs: {
    resolver: resolverConfig,
  } ,
} satisfies ESLint.Plugin;

export = plugin;
