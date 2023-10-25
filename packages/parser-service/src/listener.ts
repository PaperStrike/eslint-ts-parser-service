import { ESLintUtils, type ParserServices } from '@typescript-eslint/utils';

let parserServices: ParserServices | null = null;

const createRule = ESLintUtils.RuleCreator(() => (
  'https://www.npmjs.com/package/eslint-plugin-ts-parser-service#readme'
));

export const listener = createRule<[], never>({
  name: 'extract-ts-parser-services-helper',
  meta: {
    docs: {
      description: 'Dummy rule that used to extract the parser services',
      requiresTypeChecking: true,
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
