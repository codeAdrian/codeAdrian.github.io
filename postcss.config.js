module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    require("cssnano"),
  ],
};
