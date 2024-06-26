const MiniCssExtractorPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const packageJson = require('./package.json');
const babelConfig = require('./babel-config.editor.js');
const jsConfig = require('./jsconfig.json');

const rootPath = path.resolve(__dirname, 'module', 'editor');
const sourcePath = path.resolve(rootPath, 'src');
const buildPath = path.resolve(__dirname, 'build');
const publicPath = path.resolve(rootPath, 'public');
const buildMode = process.env.NODE_ENV || 'production';
const isDev = buildMode === 'development';
const styleLoader = isDev ? require.resolve('style-loader') : MiniCssExtractorPlugin.loader;

const getResolveAliasFromJsConfig = () => {
  return Object.entries(jsConfig.compilerOptions.paths).reduce((acc, [key, value]) => {
    const transformedKey = key.replace('/*', '');
    const paths = path.resolve(__dirname, value[0].replace('/*', ''));
    return { ...acc, [transformedKey]: paths };
  }, {});
};

module.exports = {
  entry: path.resolve(sourcePath, 'index.jsx'),
  output: {
    path: path.resolve(buildPath),
    filename: `js/[name].bundle.js`,
    chunkFilename: `js/[name].bundle.chunk.js`,
    assetModuleFilename: `media/[name].[hash][ext]`,
  },
  mode: buildMode,
  devtool: isDev ? 'source-map' : undefined,
  target: 'browserslist',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: { ...babelConfig },
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [styleLoader, require.resolve('css-loader')],
      },
      {
        test: /\.module\.css$/,
        use: [
          styleLoader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: 'am-[local]-[hash:base64:5]',
                localIdentContext: path.resolve(sourcePath),
                exportLocalsConvention: 'camelCase',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [require.resolve('file-loader')],
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['.js', '.jsx'],
      emitWarning: false,
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(publicPath, 'index.html'),
      inject: true,
    }),
    new MiniCssExtractorPlugin({
      filename: `css/editor.[contenthash:8].css`,
      chunkFilename: `css/editor.[contenthash:8].chunk.css`,
    }),
    // new StylelintPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'module/editor/public/font',
          to: 'font',
        },
        {
          from: 'module/editor/public/css',
          to: 'css',
        },
      ],
    }),
    new DefinePlugin({
      editor: {
        VERSION: `'v${packageJson.version}'`,
      },
      grammar: {
        VERSION: `'v${packageJson.grammarVersion}'`,
      },
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2020,
          },
          compress: {
            ecma: 5,
            comparisons: true,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
      new CompressionPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: 200000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          priority: -10,
          enforce: true,
          reuseExistingChunk: true,
        },
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          priority: -40,
          enforce: true,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    alias: getResolveAliasFromJsConfig(),
    extensions: ['.js', '.jsx', '.css'],
    fallback: {
      'reflect-metadata': false,
    },
  },
  stats: {
    warnings: true,
  },
  devServer: {
    static: [path.resolve(buildPath), path.resolve(publicPath)],
    compress: false,
    port: 4000,
    liveReload: true,
    hot: true,
  },
};
