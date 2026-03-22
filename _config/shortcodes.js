export default function addShortcodes(eleventyConfig) {
  eleventyConfig.addShortcode("img2x", (filename, ext, alt, className) => {
    return `<img src="/assets/img/${filename}.${ext}" srcset="/assets/img/${filename}@2x.${ext} 2x" alt="${alt || ""}" class="${className || ""}">`;
  });

  eleventyConfig.addShortcode("img4w", (filename, ext, alt, width, height, className) => {
    return `<img src="/assets/img/${filename}-640.${ext}" srcset="/assets/img/${filename}-480.${ext} 480w, /assets/img/${filename}-640.${ext} 640w, /assets/img/${filename}-960.${ext} 960w, /assets/img/${filename}-1280.${ext} 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" alt="${alt || ""}" class="${className || ""}" width="${width}" height="${height}">`;
  });

  eleventyConfig.addPairedShortcode("postImg", (filename, ext, alt) => {
    return `<img src="/assets/img/stories/${filename}.${ext}" srcset="/assets/img/stories/${filename}@2x.${ext} 2x" alt="${alt || ""}" class="post-image">`;
  });

  eleventyConfig.addPairedShortcode("musicianImg", (filename, alt) => {
    return `<img src="/assets/img/musicians/${filename}.png" srcset="/assets/img/musicians/${filename}@2x.png 2x" alt="${alt || ""}" class="musician-image">`;
  });

  eleventyConfig.addPairedShortcode("stickerImg", (filename, alt) => {
    return `<img src="/assets/img/stickers/${filename}.png" srcset="/assets/img/stickers/${filename}@2x.png 2x" alt="${alt || ""}" class="sticker-image">`;
  });
}
