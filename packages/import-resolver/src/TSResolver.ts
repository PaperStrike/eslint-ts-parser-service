import { normalize } from 'node:path';
import ts from 'typescript';

/**
 * TODO: Somehow use ModuleResolutionCache for Performance
 */
export default class TSResolver {
  constructor(
    public readonly program: ts.Program,
  ) {}

  resolve(specifier: string, containingFile: string) {
    const resolvedPath = ts.resolveModuleName(
      specifier,
      containingFile,
      this.program.getCompilerOptions(),
      ts.sys,
    ).resolvedModule?.resolvedFileName;
    return resolvedPath ? normalize(resolvedPath) : null;
  }
}
