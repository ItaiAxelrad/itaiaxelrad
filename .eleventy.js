// Plugins
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// Parsers
const markdownIt = require('markdown-it');
const lazy_loading = require('markdown-it-image-lazy-loading');
const { DateTime } = require('luxon');
// minify tasks
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { minify } = require('terser');

// eleventy configuration
module.exports = function (eleventyConfig) {
  // Opt in to a full deep merge when combining the Data Cascade
  eleventyConfig.setDataDeepMerge(true);

  // add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // add passthrough files
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('src/includes/styles');
  eleventyConfig.addPassthroughCopy('src/manifest.json');
  eleventyConfig.addPassthroughCopy('src/sw.js');
  eleventyConfig.addPassthroughCopy('src/projects/**/**/images/*');

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  // parse datetime to readable
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      "LLLL',' yyyy"
    );
  });

  // parse datetime to readable
  eleventyConfig.addFilter('fullDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      "LLLL dd',' yyyy"
    );
  });

  // parse datetime to full year
  eleventyConfig.addFilter('fullYear', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
  });

  // Sort with `Array.sort`
  eleventyConfig.addCollection('projectSorted', function (collectionApi) {
    return collectionApi.getFilteredByTag('projects').sort(function (a, b) {
      return b.date - a.date;
    });
  });

  /* Markdown */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  }).use(lazy_loading);
  // set library
  eleventyConfig.setLibrary('md', markdownLibrary);

  // postCSS filter
  eleventyConfig.addNunjucksAsyncFilter('postCSS', async function (
    code,
    callback
  ) {
    try {
      return await postcss([autoprefixer, cssnano])
        .process(code)
        .then(function (result) {
          callback(null, result.css);
        });
    } catch (err) {
      console.error('postCSS error: ', err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  // minify JS filter for inline injection
  eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error('Terser error: ', err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  // Base Config
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      // layouts: 'includes/layouts',
      data: 'data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
