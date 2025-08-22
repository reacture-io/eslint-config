import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.mjs",
    base: "src/base.mjs",
    react: "src/react.mjs",
    node: "src/node.mjs",
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
