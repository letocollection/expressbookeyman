module.exports = {
	entry: './client.jsx',
	output: {
		filename: 'bundle.js',
		path: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
};