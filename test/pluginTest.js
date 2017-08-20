import test from 'ava'
import * as path from 'path'
import {
  interfaceVersion,
  resolve
} from 'eslint-import-resolver-package-name-import'

test(t => {
  t.is(interfaceVersion, 2)

  t.deepEqual(resolve('other-module', path.resolve('src/index.js')), {
    found: false
  })

  t.deepEqual(
    resolve(
      'eslint-import-resolver-package-name-import',
      path.resolve('src/index.js')
    ),
    {
      found: true,
      path: path.resolve('src/index.js')
    }
  )

  t.deepEqual(
    resolve(
      'eslint-import-resolver-package-name-import/src',
      path.resolve('src/index.js')
    ),
    {
      found: true,
      path: path.resolve('src/index.js')
    }
  )

  t.deepEqual(
    resolve(
      'eslint-import-resolver-package-name-import/src/index',
      path.resolve('src/index.js')
    ),
    {
      found: true,
      path: path.resolve('src/index.js')
    }
  )

  t.deepEqual(
    resolve(
      'eslint-import-resolver-package-name-import/notFound',
      path.resolve('src/index.js')
    ),
    {
      found: false
    }
  )
})
