import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        React: "readonly", // 자동 JSX 변환용
      },
    },
    plugins: {
      react,
      reactHooks,
      reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules, // ✅ JSX용 최소 규칙만 적용
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/prop-types": "off", // 타입스크립트 안 쓸 경우 불필요한 prop-types 경고 제거
      "no-unused-vars": "off", // 워닝 줄이고 싶을 경우
    },
    settings: {
      react: {
        version: "detect", // JSX 자동 감지
      },
    },
  },
];
