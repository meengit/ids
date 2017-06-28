module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: __dirname + '/webpack/entry.js',
  output: {
    path: __dirname + '/src/assets/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
