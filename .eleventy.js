module.exports = function(config) {
	config.addPassthroughCopy("./src/css/");
	config.addWatchTarget("./src/css/");

	config.addShortcode("year", () => `${new Date().getFullYear()}`);

	config.addFilter('localizedPermalink', /** @param {String} input */ function(input) {
		const split = input.split('/');
		split.unshift(split.pop() || split.pop());
		return split.join('/');
	})

	return {
		dir: {
			input: 'src',
			output: 'build'
		}
	}
}