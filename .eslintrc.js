const easelint = require('easelint');

module.exports = easelint({
  javascript: true,
  typescript: true,
  jsxPragma: 'react',
  eslint: {
    root: true,
    overrides: [
      {
        // All Javascript, React, TypeScript files
        files: ['*.{js,jsx,ts,tsx}'],
        rules: {
          camelcase: 'off',
          'import/no-default-export': 'off',
          'class-methods-use-this': 'off',
          'no-restricted-syntax': 'off',
          'no-continue': 'off',
        },
      },
      {
        // www | Next.js
        files: ['apps/www/**/*.{js,jsx,ts,tsx}'],
        extends: ['plugin:@next/next/recommended'],
        settings: {
          'import/resolver': {
            typescript: {
              project: 'apps/www/tsconfig.json',
            },
          },
          next: {
            rootDir: 'apps/www',
          },
        },
        rules: {
          'react/no-unescaped-entities': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/require-default-props': 'off',
        },
      },
    ],
    ignorePatterns: ['**/dist/**/*.js'],
  },
});
