const { override, addLessLoader, fixBabelImports, addTslintLoader, enableEslintTypescript } = require("customize-cra");

module.exports = override(
  addTslintLoader(),
  enableEslintTypescript(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);