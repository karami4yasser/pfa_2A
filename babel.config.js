module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // after you instal the react-native-dotenv package you have to add these lines to your code
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
