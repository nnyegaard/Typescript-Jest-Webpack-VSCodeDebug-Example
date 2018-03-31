const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  target: "node",
  context: __dirname,
  entry: "./test/index.ts",
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, "./dist"),
    filename: `index.js`
  },
  resolve: {
    extensions: [".js", ".json", ".ts"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })],
  externals: [
    "aws-sdk",
    "sqlite3",
    "mariasql",
    "mssql",
    "mysql",
    "mysql2",
    "oracle",
    "oracledb",
    "pg-query-stream",
    "strong-oracle",
    "pg-native"
  ]
};
