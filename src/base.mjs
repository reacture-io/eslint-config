import globals from 'globals';
import prettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import eslintConfig from './eslint.mjs';
import tslintConfig from './tslint.mjs';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/build/',
      '**/coverage/',
      'src/tests/gql',
      '**/.eslintrc.cjs',
      '**/build',
      'build',
      '**/.turbo',
      '**/node_modules',
      '**/codegen.ts',
      '**/introspectFragments.js',
      '**/graphql/generated.ts',
    ],
  },
  {
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        ...globals.node,
        PrismaJson: true,
        BufferEncoding: true,
      },
      sourceType: 'module',
    },
  },
  js.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tsEslint.configs.strict,
  eslintConfig,
  tslintConfig,
];
