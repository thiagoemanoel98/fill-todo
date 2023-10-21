module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@styles': './src/styles',
            '@models': './src/models',
            '@screens': './src/screens',
            '@store': './src/store'
          }
        }
      ]
    ]
  };
};
