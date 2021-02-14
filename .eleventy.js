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

  eleventyConfig.addShortcode('img4w', (filename, ext, alt, width, height, classname) => {
    return `<img src="/assets/img/${filename}-640.${ext}" srcset="/assets/img/${filename}-480.${ext} 480w, /assets/img/${filename}-640.${ext} 640w, /assets/img/${filename}-960.${ext} 960w, /assets/img/${filename}-1280.${ext} 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" alt="${alt ? alt : ''}" class="${classname ? classname : ''}" width="${width}" height="${height}">`
  })

  eleventyConfig.addPairedShortcode('postImg', (filename, ext, alt) => {
    return `<img src="/assets/img/stories/${filename}.${ext}" srcset="/assets/img/stories/${filename}@2x.${ext} 2x" alt="${alt ? alt : ''}" class="post-image">`;
  });

  eleventyConfig.addPairedShortcode('musicianImg', (filename, alt) => {
    return `<img src="/assets/img/musicians/${filename}.png" srcset="/assets/img/musicians/${filename}@2x.png 2x" alt="${alt ? alt : ''}" class="musician-image">`;
  });

  eleventyConfig.addPairedShortcode('stickerImg', (filename, alt) => {
    return `<img src="/assets/img/stickers/${filename}.png" srcset="/assets/img/stickers/${filename}@2x.png 2x" alt="${alt ? alt : ''}" class="sticker-image">`;
  });

  eleventyConfig.addCollection('tagList', collection => {
    const tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
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
