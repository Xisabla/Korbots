module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',

    env: {
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],

    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended'
    ],

    rules: {
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/sort': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
}
