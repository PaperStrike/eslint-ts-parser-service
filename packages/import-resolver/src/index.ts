import { builtinModules } from 'node:module';
import { getParserServices } from 'eslint-plugin-ts-parser-service/listener';
import TSResolver from './TSResolver';

export const interfaceVersion = 2;

const NODE_PROTOCOL = 'node:';
const builtinModuleSet = new Set(builtinModules);

export interface ResolveConfig {
  /**
   * Whether to resolve the builtin modules.
   */
  resolveBuiltinModule?: boolean;
}

export const resolve = (
  specifier: string,
  containingFile: string,
  config?: unknown,
): {
  found: boolean;
  path?: string | null;
} => {
  const parserServices = getParserServices();
  if (!parserServices) {
    throw new Error('Failed to find @typescript-eslint parser services. Did you forget to extend from `plugin:ts-parser-service/listen`?');
  }

  /**
   * By default, we resolve the builtin modules to `null`.
   * TypeScript resolves the builtin modules to the @types/node package, which
   * may trigger the `no-extraneous-imports` rule. This is mostly correct as we
   * do import a type from it in our code, but considering the following:
   * - most of the time these builtin module types are only used internally.
   * - JS import resolvers are all resolving these builtin ones to `null`.
   * - it's hard to relate the error message to the @types/node package for
   *   the user.
   * we decided to resolve them ahead to avoid the confusion.
   */
  if (!config || (config as ResolveConfig).resolveBuiltinModule !== false) {
    if (specifier.startsWith(NODE_PROTOCOL)) {
      return {
        found: builtinModuleSet.has(specifier.slice(NODE_PROTOCOL.length)),
        path: null,
      };
    }

    if (builtinModuleSet.has(specifier)) {
      return {
        found: true,
        path: null,
      };
    }
  }

  if (!parserServices.program) {
    throw new Error('The type check program is disabled. Imports can\'t be resolved without it.');
  }

  const resolvedPath = new TSResolver(parserServices.program).resolve(specifier, containingFile);
  return {
    found: !!resolvedPath,
    path: resolvedPath,
  };
};
