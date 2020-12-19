/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		'webroot': { url: '/', static: true },
		'entry-pages': { url: '/', static: true },
		'entry-scripts': { url: '/' },
		'src': { url: '/dist' },
	},
	plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
	install: [
		/* ... */
	],
	installOptions: {
		/* ... */
	},
	devOptions: {
		fallback: 'options.html',
	},
	buildOptions: {
		metaDir: 'private/snowpack',
	},
	proxy: {
		/* ... */
	},
	alias: {
		'@chrome': './src/lib/chrome-services',
		'@components': './src/components',
	},
};
