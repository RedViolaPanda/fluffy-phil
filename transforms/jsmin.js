import { extname } from "node:path";
import { minify } from "terser";

export default async function jsmin(content, outputPath) {
  if (extname(outputPath) !== ".js") {
    return content;
  }

  const minified = await minify(content, {});
  return minified.code;
}
