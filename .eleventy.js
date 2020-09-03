const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addNunjucksFilter('dateFormat', date => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-SG', options)
  })
  eleventyConfig.addShortcode('img2x', (filename, ext, alt, classname) => {
    return `<img src="/assets/img/${filename}.${ext}" srcset="/assets/img/${filename}@2x.${ext} 2x" alt="${alt ? alt : ''}" class="${classname ? classname : ''}">`
  })

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
