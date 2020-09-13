const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addNunjucksFilter('dateFormat', date => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-SG', options)
  })
  eleventyConfig.addNunjucksFilter('limit', (arr, limit) => arr.slice(0, limit))

  eleventyConfig.addShortcode('img2x', (filename, ext, alt, classname) => {
    return `<img src="/assets/img/${filename}.${ext}" srcset="/assets/img/${filename}@2x.${ext} 2x" alt="${alt ? alt : ''}" class="${classname ? classname : ''}">`
  })

  eleventyConfig.addPairedShortcode('postImg', (filename, ext) => {
    return `<img src="/assets/img/stories/${filename}.${ext}" srcset="/assets/img/stories/${filename}@2x.${ext} 2x" alt="" class="post-image">`;
  });

  eleventyConfig.addPairedShortcode('musicianImg', (filename) => {
    return `<img src="/assets/img/musicians/${filename}.png" srcset="/assets/img/musicians/${filename}@2x.png 2x" alt="" class="musician-image">`;
  });

  return {
    templateFormats: [
      "md",
      "njk"
    ],
    passthroughFileCopy: true,
    dir: {
      data: '../_data',
      input: 'src/views',
      output: 'dist'
    }
  }
}
