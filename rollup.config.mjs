import serve from "rollup-plugin-serve";
import css from "rollup-plugin-import-css";
import html from "rollup-plugin-html";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/pages/ia_db/ia_db.js",

  output: {
    file: "./dist/pages/ia_db/ia_db.umd.js",
    format: "umd", // CommonJS format, compatible with "platform: 'node'" in esbuild
    sourcemap: true,
    name: "ia_db",
  },
  plugins: [
    html({
      include: "**/*.html",
    }),
    css(), // Import CSS files as part of the bundle
    serve({
      contentBase: "./",
      port: 5500,
    }),
    nodeResolve(),
    commonjs(),
  ],
};
