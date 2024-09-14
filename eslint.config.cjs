module.exports = [
  {
    files: ['**/*.cjs', '**/*.js', '**/*.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.cjs', 'commitlint.config.js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
  },
  {
    ignores: ['lib/'],
  },
]
