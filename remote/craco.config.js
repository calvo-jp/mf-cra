const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

/** @type {import('@craco/types').CracoConfig} */
module.exports = {
	devServer: {
		port: 4201,
		open: false,
	},
	webpack: {
		configure(config) {
			config.output.publicPath = "auto";
			config.plugins.push(
				new ModuleFederationPlugin({
					name: "remote",
					filename: "remoteEntry.js",
					remotes: {},
					exposes: {
						"./Login": "./src/Login.jsx",
					},
					shared: {
						...dependencies,
						react: {
							singleton: true,
							requiredVersion: dependencies.react,
						},
						"react-dom": {
							singleton: true,
							requiredVersion: dependencies["react-dom"],
						},
					},
				}),
			);

			return config;
		},
	},
};
