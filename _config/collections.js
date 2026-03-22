export default function addCollections(eleventyConfig) {
  eleventyConfig.addCollection("tagList", (collection) => {
    const tagsSet = new Set();

    collection.getAll().forEach((item) => {
      if (!item.data.tags) {
        return;
      }

      item.data.tags
        .filter((tag) => !["post", "all"].includes(tag))
        .forEach((tag) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).sort();
  });
}
