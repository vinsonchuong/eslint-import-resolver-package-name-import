# eslint-import-resolver-package-name-import
[![Build Status](https://travis-ci.org/vinsonchuong/eslint-import-resolver-package-name-import.svg?branch=master)](https://travis-ci.org/vinsonchuong/eslint-import-resolver-package-name-import)

A [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
resolver for [babel-plugin-package-name-import](https://github.com/vinsonchuong/babel-plugin-package-name-import)

## Installing
Install it locally to your project by running:

```bash
yarn add --dev eslint-import-resolver-package-name-import
```

Add the plugin to your ESLint configuration:

```json
{
  "settings": {
    "import/resolver": {
      "package-name-import": {}
    }
  }
}
```
