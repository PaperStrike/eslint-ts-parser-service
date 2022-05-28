import { ESLintUtils, ParserServices } from '@typescript-eslint/utils';

let parserServices: ParserServices | null = null;

const createRule = ESLintUtils.RuleCreator(() => (
  'https://www.npmjs.com/package/eslint-import-resolver-ts-parser#listener'
));

export const listener = createRule({
  name: 'rule-helper',
  meta: {
    docs: {
      description: '',
      recommended: 'error',
      requiresTypeChecking: false,
    },
    type: 'problem',
    messages: {},
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    parserServices = ESLintUtils.getParserServices(context, true);
    return {};
  },
});

export const getParserServices = () => parserServices;
