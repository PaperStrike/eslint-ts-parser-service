export = {
  extends: [
    'plugin:ts-parser-service/listen',
  ],
  settings: {
    'import/resolver': 'ts-parser',
  },
};
