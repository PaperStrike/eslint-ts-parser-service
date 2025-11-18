import type { ESLint, Linter } from 'eslint';
import { listener } from './listener';

const plugin = {
  rules: {
    listener,
  } as object as ESLint.Plugin['rules'],
  configs: {
    get listen() {
      return listenConfig;
    },
  },
} satisfies ESLint.Plugin;

const listenConfig: Linter.Config = {
  plugins: {
    'ts-parser-service': plugin,
  },
  rules: {
    'ts-parser-service/listener': 'error'
  },
};

export default plugin;
