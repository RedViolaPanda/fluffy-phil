const minify = require("terser").minify;
const extname = require("path").extname;

const jsmin = async (content, outputPath) => {
  const minified = await minify(content, {});
  return minified.code;
};

module.exports = async (content, outputPath) => {
  const ext = extname(outputPath);
  switch (ext) {
    case ".js":
      return jsmin(content, outputPath);
    default:
      return content;
  }
};
