import * as path from 'path'
import nodeResolve from 'resolve'
import findPackageJson from 'babel-plugin-package-name-import/src/findPackageJson'
import resolvePathAlias from 'babel-plugin-package-name-import/src/resolvePathAlias'

export const interfaceVersion = 2

export function resolve (source, file) {
  const packageJson = findPackageJson(file)

  if (source.split(path.sep)[0] !== packageJson.data.name) {
    return {found: false}
  }

  const resolvedPath = resolvePathAlias(
    packageJson.path,
    packageJson.data.name,
    file,
    source
  )

  try {
    const absolutePath = nodeResolve.sync(resolvedPath, {basedir: path.dirname(file)})

    return {
      found: true,
      path: absolutePath
    }
  } catch (error) {
    return {found: false}
  }
}
