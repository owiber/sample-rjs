({
  baseUrl: './dev',
  skipDirOptimize: true,
  dir: 'build',
  paths: {
    requireLib: '../node_modules/requirejs/require'
  },
  stubModules: ['test'],
  optimizeAllPluginResources: true,
  modules: [
  	{
  		name: 'index',
		  include: ['requireLib'],
		  insertRequire: ['index']
  	}
  ]
})