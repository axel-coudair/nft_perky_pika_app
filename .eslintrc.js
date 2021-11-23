module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
        "func-names": 0,
        "jsx-a11y/anchor-is-valid": [0, {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight"],
            "aspects": ["invalidHref", "preferButton"]
        }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": [1, {
            "html": "ignore",
            "custom": "ignore",
            "exceptions": [""]
        }],
        "react/destructuring-assignment": [0, "always", { "ignoreClassFields": true }],
        "react/prop-types": [2, { ignore: ['children'] }]
    }
};
