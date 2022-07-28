module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {}
};

// module.exports = {
//     extends: 'standard',
//     rules: {
//         indent: ['error', 4],
//         semi: ['error', 'always'],
//         'no-trailing-spaces': 0,
//         'keyword-spacing': 0,
//         'no-unused-vars': 1,
//         'no-multiple-empty-lines': 0,
//         'space-before-function-paren': 0,
//         'eol-last': 0
//     }
// };
