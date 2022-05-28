import { builtinModules } from 'node:module';
import { getParserServices } from 'eslint-plugin-ts-parser-service/listener';
import TSResolver from './TSResolver';

export const interfaceVersion = 2;

const NODE_PROTOCOL = 'node:';
export const resolve = (
  specifier: string,
  containingFile: string,
): {
  found: boolean;
  path?: string | null;
} => {
  const parserServices = getParserServices();
  if (!parserServices) {
    throw new Error('Failed to find @typescript-eslint parser services');
  }

  if (specifier.startsWith(NODE_PROTOCOL)) {
    return {
      found: builtinModules.includes(specifier.slice(NODE_PROTOCOL.length)),
      path: null,
    };
  }

  const resolvedPath = new TSResolver(parserServices.program).resolve(specifier, containingFile);
  return {
    found: !!resolvedPath || builtinModules.includes(specifier),
    path: resolvedPath,
  };
};
