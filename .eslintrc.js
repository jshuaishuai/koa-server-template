module.exports = {
    parser: 'babel-eslint',
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
        es6: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['prettier'],
    rules: {
        'no-unused-vars': 0,
        'no-console': 'off',
        'max-classes-per-file': 0,
        // indent: ['error', 4],
        'no-fallthrough': 'off',
        'no-use-before-define': 'off',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
    },
}
