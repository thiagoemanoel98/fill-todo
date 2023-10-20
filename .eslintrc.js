module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint-config-prettier'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before'
              },
              {
                pattern: '@+(routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before'
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            },
            'newlines-between': 'always'
          }
        ]
      }
    }
  ]
};
