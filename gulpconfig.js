module.exports = function () {
  var config = {
    browsers: ["> 0.7%"],

    css: {
      inputMain: "./_pcss/**/[^_]*.{css,pcss}",
      inputAll: "./_pcss/**/*.{css,pcss}",
      excludeVendor: "!_pcss/vendor/**/*",
      output: "./assets/",
      config: {
        atImport: { extensions: [".css", ".pcss"], prefix: "_" },
        postcssPresetEnv: {
          autoprefixer: false,
          features: {
            "nesting-rules": true,
            "custom-media-queries": true,
          },
        },
        cssNano: { autoprefixer: false },
      },
    },
  };

  return config;
};
