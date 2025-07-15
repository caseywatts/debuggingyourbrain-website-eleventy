import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import lightningCSS from "@11tyrocks/eleventy-plugin-lightningcss";
import litPlugin from "@lit-labs/eleventy-plugin-lit";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.setServerOptions({
		domDiff: false,
	});
	eleventyConfig.addPlugin(lightningCSS);

	eleventyConfig.addPlugin(litPlugin, {
		mode: "worker",
		componentModules: [
			"src/js/dyb-header.js",
			"src/js/dyb-footer.js",
			"src/js/dyb-hero.js",
		],
	});
}

export const config = {
	dir: {
		input: "src",
		output: "public",
		// input: "content", // default: "."
		// includes: "_includes", // default: "_includes"
		// data: "../_data", // default: "_data"
	},
};
