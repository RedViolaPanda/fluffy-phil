export default function addFilters(eleventyConfig) {
  eleventyConfig.addNunjucksFilter("dateFormat", (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-SG", options);
  });

  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
}
