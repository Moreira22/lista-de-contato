module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@route': './src/route',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils'
          },
        },
      ],
    ],
  };
};
