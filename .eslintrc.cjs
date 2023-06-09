module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
	semi: ["error", "never"],
   	"max-len": ["warn", { code: 120 }],
	"quotes": ["error", "double"],
	"react/function-component-definition":"off"
  },
};
