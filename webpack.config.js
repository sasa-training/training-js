module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/js/main.js',
    mode: "production",
    // ファイルの出力設定
    output: {
      path: __dirname + 'dist/',
      filename: 'js/main.js'
    },
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { url: false }
            }
          ]
        }
      ]
    },
    // ES5(IE11等)向けの指定
    target: ["web", "es5"],
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: "dist",
    open: true
  },
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch"
  },
  "devDependencies": {
    "webpack": "^5.64.2",
    "webpack-cli": "^4.9.1",
  },
};const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
 
module.exports = {
    // コンパイルモード
    mode: 'production',
    // エントリーポイントの設定
    entry: {
         // コンパイル対象のファイルを指定
        'index': path.resolve(__dirname, "./src/js/index.js"),
        'style.css': path.resolve(__dirname, './src/sass/style.scss')
    },
    // 出力設定
    output: {
        path: path.resolve(__dirname, './dist/'), // 出力先フォルダを絶対パスで指定
        filename: 'js/[name].js' // [name]にはentry:で指定したキーが入る
    },
    module: {
        rules: [
            // sassのコンパイル設定
            {
                test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
                use: [
                    MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
                    'css-loader',
                    'postcss-loader', // オプションはpostcss.config.jsで指定
                    'sass-loader',
                    // 下から順にコンパイル処理が実行されるので、記入順序に注意
                ]
            }
        ]
    },
    plugins: [
        // 出力先のフォルダを一旦空に
        new CleanWebpackPlugin({
            // 対象ファイル指定
            cleanOnceBeforeBuildPatterns: [ // 複数ある場合は配列で指定
                '**/*', // 出力フォルダ（output: で指定したパス）内のすべてのファイル
                '!**.html', '!img/*'
            ],
        }),
        new FixStyleOnlyEntriesPlugin(), // CSS別出力時の不要JSファイルを削除
        new MiniCssExtractPlugin({ // CSSの出力先
            filename: 'css/[name]'// 出力ファイル名を相対パスで指定（[name]にはentry:で指定したキーが入る）
        }),
    ],
    // node_modules を監視（watch）対象から除外
    watchOptions: {
        ignored: /node_modules/
    }
};