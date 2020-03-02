module.exports = {
  name: 'dx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dx',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
