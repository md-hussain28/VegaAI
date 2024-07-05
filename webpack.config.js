// webpack.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Adjust the entry point based on your project structure
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv()
    // Add other plugins and configurations as needed
  ],
  module: {
    rules: [
      // Add loaders for JavaScript, CSS, etc. as needed
    ],
  },
};
