import { listener } from './listener';

export = {
  rules: { listener },
  configs: {
    listen: {
      plugins: ['ts-parser-service'],
      rules: { 'ts-parser-service/listener': 'error' },
    },
  },
};
