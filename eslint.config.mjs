import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
  ...next,
  prettier,
];

export default config;
