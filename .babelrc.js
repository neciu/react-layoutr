/* eslint-env node */

module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
    'react',
  ],
};
