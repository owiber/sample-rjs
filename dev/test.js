define({
  load: function (name, req, onload, config) {
    onload(name);
  },
  write: function (pluginName, moduleName, write) {
    write("define('" + pluginName + "!" + moduleName  + "', function () { return '" + moduleName + "';});\n");
  },
  writeFile: function (pluginName, moduleName, parentRequire, write) {
    write(parentRequire.toUrl('test_' + moduleName + '.txt'), moduleName);
  }
});