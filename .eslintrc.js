module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Change the parser to TypeScript
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // Add TypeScript recommended rules
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: [
        'react',
        '@typescript-eslint', // Add TypeScript plugin
        '@next/eslint-plugin-next',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error', // Ensure that Pret
        'import/prefer-default-export': 0,
        'no-console': 'warn',
        'no-nested-ternary': 0,
        'no-underscore-dangle': 0,
        'no-unused-expressions': ['error', { allowTernary: true }],
        camelcase: 0,
        'react/self-closing-comp': 1,
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-no-comment-textnodes': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/no-unescaped-entities': 0,
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'never'],
        'prettier/prettier': [
            'error',
            { endOfLine: 'auto' },
            { usePrettierrc: true },
        ],
    },
}
