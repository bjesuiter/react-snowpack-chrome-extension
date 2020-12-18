/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		'public': { url: '/', static: true },
		'src': { url: '/dist' },
		'public-scripts': { url: '/' },
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
		/* ... */
	},
	proxy: {
		/* ... */
	},
	alias: {
		/* ... */
	},
};
