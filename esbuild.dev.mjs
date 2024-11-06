import * as esbuild from "esbuild";
import htmlModulesPlugin from "esbuild-plugin-html-modules";

let ctx = await esbuild.context({
  entryPoints: [
    "./src/styles.css",
    "./src/pages/ro_db/ro_db.js",
    "./src/pages/ao_db/ao_db.umd.js",
  ],
  bundle: true,
  sourcemap: true,
  minify: false,
  platform: "node",
  outdir: "./dist",
  plugins: [htmlModulesPlugin()],
});

let { host, port } = await ctx.serve({
  port: 5500,
  servedir: "./",
});

console.log(`serving at ${host}:${port}`);
