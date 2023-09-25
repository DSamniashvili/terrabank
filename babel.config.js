/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          navigators: './src/navigators',
          components: './src/components',
          hooks: './src/hooks',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          theme: './src/theme',
          translations: './src/translations',
          types: './src/types',
        },
      },
    ],
    'inline-dotenv',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
