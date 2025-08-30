/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  endOfLine: 'lf',

  // Plugins (optional but handy)
  plugins: ['prettier-plugin-tailwindcss'],

  // If your Tailwind config lives outside project root (e.g., ./config/tailwind.config.ts),
  // point to it; otherwise remove this line.
  tailwindConfig: './config/tailwind.config.ts',
}