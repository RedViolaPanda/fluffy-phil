import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";

import addCollections from "./_config/collections.js";
import addFilters from "./_config/filters.js";
import addShortcodes from "./_config/shortcodes.js";
import jsmin from "./transforms/jsmin.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./src/assets/fonts": "/assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "./src/assets/img": "/assets/img" });
  eleventyConfig.addPassthroughCopy({ "./src/assets/favicons": "/" });

  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(pluginRss);

  addFilters(eleventyConfig);
  addShortcodes(eleventyConfig);
  addCollections(eleventyConfig);

  eleventyConfig.addTransform("minify", jsmin);
}

export const config = {
  dir: {
    input: "src/content",
    includes: "../_includes",
    data: "../_data",
    output: "_site",
  },
};
