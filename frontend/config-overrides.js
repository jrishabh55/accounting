const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const babelImport = fixBabelImports("import", {
  libraryName: "antd",
  libraryDirectory: "es",
  style: true,
});

const lessLoader = addLessLoader({
  javascriptEnabled: true,
  modifyVars: {},
});


module.exports = override(babelImport, lessLoader);
