/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		'webroot': { url: '/', static: true },
		'entrypoint-pages': { url: '/', static: true },
		'entrypoint-scripts': { url: '/' },
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
		/* ... */
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
