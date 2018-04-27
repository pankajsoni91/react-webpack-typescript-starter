// shared config (dev and prod)
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = context => ({
  target: "node",
  resolve: {
    modules:[context,'node_modules'],
    extensions: [".ts", ".js"]
  },
  context: context,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['babel-loader', {options:{
          configFileName:`${context}/tsconfig.json`,
        },loader:'awesome-typescript-loader'}],
      
      }
    ]
  },
  plugins: [new CheckerPlugin()]
});
