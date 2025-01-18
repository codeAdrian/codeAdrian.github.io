const path = require('path');
const Image = require('@11ty/eleventy-img');
const postcss = require('postcss');
const lucideIcons = require('@grimlink/eleventy-plugin-lucide-icons');
const htmlMinifierTerser = require('html-minifier-terser');
const fs = require('fs');

async function imageShortcode(
  src,
  alt,
  className = 'image',
  loading = 'lazy',
  decoding = 'async',
  sizeMin = 768,
  sizeMax = 1280,
  sizes = '(min-width: 768px) 100vw, 50vw'
) {
  let srcPrefix = `./src/assets/images/`;
  src = srcPrefix + src;
  console.log(`Generating image(s) from:  ${src}`);
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [parseInt(sizeMin), parseInt(sizeMax)],
    sharpWebpOptions: { quality: 70 },
    sharpAvifOptions: {
      quality: 70
    },
    formats: ['avif', 'webp', 'png'],
    urlPath: '/images/',
    outputDir: './_site/images/',
    loading: loading,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    }
  });
  let lowsrc = metadata.png[0];
  let highsrc = metadata.png[metadata.png.length - 1];
  return `<picture class="${className}">
    ${Object.values(metadata)
      .map(imageFormat => {
        return `  <source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat
          .map(entry => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}
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
  eleventyConfig.addPlugin(lucideIcons, {
    class: 'icon-lucide',
    stroke: 'currentColor',
    'stroke-width': 2
  });

  eleventyConfig.addCollection('testimonials', function (collection) {
    const coll = collection.getFilteredByTag('testimonials');
    return coll;
  });
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
  eleventyConfig.addLiquidShortcode('image', imageShortcode);
  eleventyConfig.addJavaScriptFunction('image', imageShortcode);

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPairedAsyncShortcode(
    'inlinecriticalcss',
    async function (code) {
      const filepath = path.join(__dirname, 'src/_includes/critical.css');

      const result = await postcss([
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-preset-env')({
          stage: 3,
          features: {
            'nesting-rules': true,
            'custom-media-queries': true
          }
        }),
        require('cssnano')
      ])
        .process(code, { from: filepath })
        .then(result => result.css);
      return result;
    }
  );

  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/assets/svg');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy({
    'node_modules/@splidejs/splide/dist/js/splide.min.js':
      'assets/js/splide.min.js'
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/external-svg-loader/svg-loader.min.js':
      'assets/js/svg-loader.min.js'
  });

  eleventyConfig.addLayoutAlias('base', 'layouts/_default/base.njk');
  eleventyConfig.addLayoutAlias('portfolio', 'layouts/_default/portfolio.njk');
  eleventyConfig.addLayoutAlias('homepage', 'layouts/_default/homepage.njk');
  eleventyConfig.addLayoutAlias('index', 'layouts/_default/index.njk');

  let markdownIt = require('markdown-it');
  let markdownItOpts = {
    html: true,
    linkify: false,
    typographer: true
  };
  const markdownEngine = markdownIt(markdownItOpts);
  markdownEngine.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }
    return n;
  };
  eleventyConfig.setLibrary('md', markdownEngine);

  eleventyConfig.addWatchTarget('src/**/*.js');
  eleventyConfig.addWatchTarget('./src/assets/css/*.css');
  eleventyConfig.addWatchTarget('./src/**/*.md');

  eleventyConfig.addTransform('htmlmin', async function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = await htmlMinifierTerser.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        removeRedundantAttributes: true,
        sortAttributes: true
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addCollection('about', function (collection) {
    const coll = collection.getFilteredByTag('about');
    return coll;
  });

  eleventyConfig.addCollection('featured', function (collection) {
    const coll = collection.getFilteredByTag('featured');
    return coll;
  });

  eleventyConfig.addCollection('portfolio', function (collection) {
    const coll = collection.getFilteredByTag('portfolio');
    for (let i = 0; i < coll.length; i++) {
      let prevPost = coll[i - 1];
      let nextPost = coll[i + 1];
      if (i === 0) {
        prevPost = coll[coll.length - 1];
      }

      if (i === coll.length - 1) {
        nextPost = coll[0];
      }

      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }
    return coll;
  });

  eleventyConfig.addPassthroughCopy('./src/assets/fonts');

  eleventyConfig.setBrowserSyncConfig({
    files: ['src/**/*.js', 'src/assets/css/*.css', 'src/**/*.md'],
    ghostMode: false,
    port: 3000,
    open: true,
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      input: 'src',
      data: '../_data',
      includes: '_includes'
    },
    templateFormats: ['html', 'md', 'njk', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    pathPrefix: '/'
  };
};
