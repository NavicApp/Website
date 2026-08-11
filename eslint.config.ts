import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import { defineConfig, globalIgnores } from "eslint/config"
import astro from "eslint-plugin-astro"
import promise from "eslint-plugin-promise"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
	globalIgnores(["dist/", ".astro/", "node_modules/"]),

	js.configs.recommended,
	tseslint.configs.recommended,
	astro.configs.recommended,
	promise.configs["flat/recommended"],

	stylistic.configs.customize({
		indent: "tab",
		quotes: "double",
		semi: false,
		braceStyle: "1tbs",
		commaDangle: "never"
	}),

	{
		plugins: { "@eslint": js },
		rules: {
			// safe to disable this rule because typescript compiler does it already
			// also it causes issues with astro
			"no-undef": "off"
		}
	},

	{
		plugins: { "@stylistic": stylistic },
		rules: {
			"@stylistic/linebreak-style": ["error", "unix"],
			"@stylistic/eol-last": ["error", "always"],
			"@stylistic/max-len": ["error", { code: 100, ignoreStrings: true }],
			// this rule doesn't like <style>s in astro files if u dont do this
			"@stylistic/jsx-one-expression-per-line": "off"
		}
	},

	{
		languageOptions: { globals: globals.browser },
		plugins: { "simple-import-sort": simpleImportSort },
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error"
		}
	}
])
