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

    settings: {
        react: {
            version: 'detect'
        }
    }
}
