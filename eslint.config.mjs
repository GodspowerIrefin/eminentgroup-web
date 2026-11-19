import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The site ships as static HTML with Next's client runtime removed (scripts/strip-next-runtime.mjs):
    // pages link with plain <a> (full page loads), and the design kit in public/assets is loaded as
    // plain stylesheets and deferred module scripts. These rules assume the client runtime.
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/assets/**", ".claude/**", ".agents/**", "skills/**"]),
]);

export default eslintConfig;
