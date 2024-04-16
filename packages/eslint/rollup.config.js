export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/esm/bundle.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "./dist/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
};
