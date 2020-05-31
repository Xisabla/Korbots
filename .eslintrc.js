module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },

    plugins: ['simple-import-sort'],

    parser: 'babel-eslint',

    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended'
    ],

    rules: {
        'sort-imports': 'off',
        'import/order': 'off',

        'simple-import-sort/sort': 'error'
    },

    settings: {
        react: {
            version: 'detect'
        }
    }
}
