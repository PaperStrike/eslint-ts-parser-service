import type { ESLintUtils } from '@typescript-eslint/utils';
import { listener } from './listener';

export = {
  rules: { listener } as Record<string, ESLintUtils.RuleModule<string>>,
  configs: {
    listen: {
      plugins: ['ts-parser-service'],
      rules: { 'ts-parser-service/listener': 'error' },
    },
  },
};
