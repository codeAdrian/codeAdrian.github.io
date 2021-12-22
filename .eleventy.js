const htmlmin = require("html-minifier");
const ErrorOverlay = require("eleventy-plugin-error-overlay");
const svgContents = require("eleventy-plugin-svg-contents");
const path = require("path");
const Image = require("@11ty/eleventy-img");
const purgeCssPlugin = require("eleventy-plugin-purgecss");
const pluginBabel = require("eleventy-plugin-babel");
const pluginPWA = require("eleventy-plugin-pwa");
const postcss = require("postcss");

async function imageShortcode(
  src,
  alt,
  className = "image",
  loading = "lazy",
  decoding = "async"
) {
  let sizes = "(min-width: 1024px) 100vw, 50vw";
  let srcPrefix = `./src/assets/images/`;
  src = srcPrefix + src;
  console.log(`Generating image(s) from:  ${src}`);
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [720, 1280],
    formats: ["avif", "webp", "jpeg"],
    urlPath: "/images/",
    outputDir: "./_site/images/",
    loading: loading,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });
  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];
  return `<picture class="${className}">
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
    <img
      src="${lowsrc.url}"
      width="${highsrc.width}"
      height="${highsrc.height}"
      alt="${alt}"
      loading="${loading}"
      decoding="${decoding}">
  </picture>`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  // === Liquid needed if `markdownTemplateEngine` **isn't** changed from Eleventy default
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPlugin(purgeCssPlugin, {
    config: "./purgecss.config.js",
    quiet: false,
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/swiper/swiper-bundle.min.js":
      "assets/js/swiper-bundle.min.js",
  });

  eleventyConfig.addPairedAsyncShortcode(
    "mycriticalcss",
    async function (code) {
      // for relative path CSS imports
      const filepath = path.join(__dirname, "src/_includes/critical.css");

      const result = await postcss([
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-preset-env")({
          stage: 3,
          features: {
            "nesting-rules": true,
            "custom-media-queries": true,
          },
        }),
        require("cssnano"),
      ])
        .process(code, { from: filepath })
        .then((result) => result.css);
      return result;
    }
  );

  eleventyConfig.addPlugin(pluginBabel, {
    uglify: true,
    watch: "src/assets/js/**/*.js",
    outputDir: "_site/assets/js",
  });

  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/assets/svg");
  eleventyConfig.addPassthroughCopy("./src/images");

  // https://www.11ty.dev/docs/layouts/
  eleventyConfig.addLayoutAlias("base", "layouts/_default/base.njk");
  eleventyConfig.addLayoutAlias("portfolio", "layouts/_default/portfolio.njk");
  eleventyConfig.addLayoutAlias("homepage", "layouts/_default/homepage.njk");
  eleventyConfig.addLayoutAlias("index", "layouts/_default/index.njk");

  /* Markdown plugins */
  // https://www.11ty.dev/docs/languages/markdown/
  // --and-- https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // --and-- https://github.com/planetoftheweb/seven/blob/master/.eleventy.js
  let markdownIt = require("markdown-it");
  let markdownItOpts = {
    html: true,
    linkify: false,
    typographer: true,
  };
  const markdownEngine = markdownIt(markdownItOpts);
  // START, de-bracketing footnotes
  //--- see http://dirtystylus.com/2020/06/15/eleventy-markdown-and-footnotes/
  markdownEngine.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId;
    }
    return n;
  };
  // END, de-bracketing footnotes
  eleventyConfig.setLibrary("md", markdownEngine);

  eleventyConfig.addWatchTarget("src/**/*.js");
  eleventyConfig.addWatchTarget("./src/assets/css/*.css");
  eleventyConfig.addWatchTarget("./src/**/*.md");

  eleventyConfig.setBrowserSyncConfig({
    ...eleventyConfig.browserSyncConfig,
    files: ["src/**/*.js", "src/assets/css/*.css", "src/**/*.md"],
    ghostMode: false,
    port: 3000,
  });

  eleventyConfig.addPlugin(ErrorOverlay);

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426
  /*
  eleventyConfig.addCollection("posts", function (collection) {
    const coll = collection.getFilteredByTag("post");
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });
  */

  eleventyConfig.addCollection("about", function (collection) {
    const coll = collection.getFilteredByTag("about");
    return coll;
  });

  eleventyConfig.addCollection("testimonials", function (collection) {
    const coll = collection.getFilteredByTag("testimonials");
    return coll;
  });

  eleventyConfig.addCollection("featured", function (collection) {
    const coll = collection.getFilteredByTag("featured");
    return coll;
  });

  eleventyConfig.addCollection("portfolio", function (collection) {
    const coll = collection.getFilteredByTag("portfolio");
    for (let i = 0; i < coll.length; i++) {
      let prevPost = coll[i - 1];
      let nextPost = coll[i + 1];
      if (i === 0) {
        prevPost = coll[coll.length - 1];
      }

      if (i === coll.length - 1) {
        nextPost = coll[0];
      }

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });

  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  eleventyConfig.addPlugin(pluginPWA, {
    swDest: "./_site/sw.js",
    globPatterns: ["**/*.{html,css,js,woff2,woff}"],
    runtimeCaching: [
      {
        urlPattern: /^.*\.(html|woff2|woff)$/,
        handler: `staleWhileRevalidate`,
      },
      {
        urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
        handler: `staleWhileRevalidate`,
      },
    ],
  });

  return {
    dir: {
      input: "src",
      data: "../_data",
      includes: "_includes",
    },
    templateFormats: ["html", "md", "njk", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
