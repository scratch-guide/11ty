export interface Page {
	url: string
	fileSlug: string
	filePathStem: string
	inputPath: string
	outputPath: string
	outputFileExtension: string
	date: Date
}

export interface EleventyComputed {
	[key: string]: EleventyComputed | string | number | boolean | ((arg0: { page: Page, [key: string]: any }) => any)
}