import config from "./base.mjs";

export default [
  ...config,
  {
    ignores: ["node_modules/*", "dist/*", "build/*"],
    rules: {
      "no-useless-constructor": "off",
    },
  },
  {
    languageOptions: {
      globals: {
        NodeJS: true,
      },
    },
  },
];
