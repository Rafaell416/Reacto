module.exports = {
	entry: './src/server.js',
	output: {
		filename: 'index.js',
		path: 'built/server'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['latest-minimal', 'react']
				}
			}
		]
	},
	target: 'node',
}