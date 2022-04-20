/** @type {import('../_types/eleventy').EleventyComputed} */
module.exports = {
	eleventyNavigation: {
		title: data => data.title,
		key: data => {
			console.log(data)
			return data.page.filePathStem.match(/([\w-]+)\/\w+$/)?.[1] || 'Home';
		},
		parent: data => data.page.filePathStem.match(/([\w-]+)\/[\w-]+\/\w+$/)?.[1],
		order: data => data.page.filePathStem.match(/(\d+)-(?:[\w-]+\/)?\w+$/)?.[1] || 0
	}
}