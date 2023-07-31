module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/imgs/");//add folders to _site
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addGlobalData("langs", ['en', 'fr']);
  eleventyConfig.addCollection("en", function (collection) {
    return collection.getFilteredByGlob("./src/en/**/*.+(md|njk)");
  });
  eleventyConfig.addCollection("fr", function (collection) {
    return collection.getFilteredByGlob("./src/fr/**/*.+(md|njk)");
  });
  eleventyConfig.addFilter('main', (content) => {
    const separator = '<!--section-->';
    const parts = content.split(separator);
    return parts[0];
  });
  eleventyConfig.addFilter('sidenote', (content) => {
    const separator = '<!--section-->';
    const parts = content.split(separator);
    return parts[1];
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: 'public',
    },
    templateFormats: ['html', 'md', 'njk','css'],//copy any files with these extensions to _site
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
