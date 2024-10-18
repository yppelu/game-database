import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "camelcase": "warn",
      "dot-notation": "warn",
      "no-await-in-loop": "warn",
      "no-console": "warn",
      "no-constructor-return": "error",
      "no-duplicate-imports": "warn",
      "no-empty-function": "warn",
      "no-inner-declarations": "error",
      "no-promise-executor-return": ["error", { allowVoid: true }],
      "no-self-compare": "error",
      "no-undef-init": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": ["error", "nofunc"],
      "no-useless-assignment": "error",
      "no-useless-rename": ["error", { ignoreDestructuring: false }],
      "no-useless-return": "error",
      "no-var": "error",
      "prefer-const": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    },
    settings: { react: { version: "18.3" } }
  }
);
