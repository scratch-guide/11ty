/** @typedef {import("./src/_types/eleventy")} Page */

module.exports = function(config) {
	config.addPassthroughCopy("./src/css/");
	config.addWatchTarget("./src/css/");

	config.addShortcode("year", () => `${new Date().getFullYear()}`);

	config.addFilter('localizedPermalink', /** @param {String} input */ function(input) {
		const split = input.split('/');
		split.unshift(split.pop() || split.pop());
		return split.join('/');
	})

	config.addFilter('removeNavOrder', /** @param {String} input */ function(input) {
		return input.replace(/(?<=\/)\d+-?/, '')
	})

	config.addPlugin(require('@11ty/eleventy-navigation'))

	return {
		dir: {
			input: 'src',
			output: 'build'
		},
		pathPrefix: '/11ty/'
	}
}