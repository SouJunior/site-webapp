import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    // Ignorar pastas/arquivos globais
    {
        ignores: [
            'node_modules',
            'dist',
            'build',
            'coverage',
            '*.config.js',
            '.eslintrc.js',
            'jest.config.ts',
        ],
    },

    // Regras base JS
    js.configs.recommended,

    // Regras base TS (v8+)
    ...tseslint.configs.recommended,

    // Suas regras do projeto
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
            // TS
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
            ],

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // React Fast Refresh (Vite)
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Gerais
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
        },
    },
);
