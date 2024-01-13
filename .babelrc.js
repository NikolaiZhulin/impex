module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-react-intl',
      {
        ast: true,
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        extractFromFormatMessageCall: true,
      },
    ],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
};
