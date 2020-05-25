module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },

    parser: 'babel-eslint',

    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended'
    ],

    rules: {
        indent: ['error', 4]
    },

    settings: {
        react: {
            version: 'detect'
        }
    }
}
