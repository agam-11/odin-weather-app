import globals from "globals";
import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
//  enable ^^ if using react

export default [
  {
    ignores: ["webpack.*.js"],

    files: ["**/*.{js, mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,

    // ...pluginReact.configs.flat.recommended,
    // enable ^^ if using react
  },
];
