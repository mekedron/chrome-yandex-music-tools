const path = require('path')
// const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env = {}) => {
  return {
    devtool: !env.production ? 'inline-source-map' : false,
    entry: {
      './code/background': './src/background.js',
      './code/foreground': './src/foreground.js',
    },
    plugins: [
      new CopyPlugin({
          patterns: [
            {
              from: 'src/popup.html',
              to: 'code/popup.html',
            },
            {
              from: 'src/images/*.png',
              to: 'images/[name].[ext]',
            },
            'manifest.json',
          ],
        },
      ),
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
      ignored: ['src/images/**/*.*', 'node_modules/**'],
    },
  }
}
