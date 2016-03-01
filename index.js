module.exports = function(base2_app, root_dir) {
  var conf = config(root_dir)
  
  var module_names = get_dependency_modules(root_dir, conf);
  
  module_names.forEach(function(name){
    base2_app.mount_routes(root_dir + '/node_modules/'+ name + '/' + conf.routes_dir);
  })
}

function config(root_dir) {
  //读取root_dir下的package.json，读取里面的config.moa_api
  //读取的配置和config_default合并
  var config_default = require('./config_default')
  var pkg = require(root_dir + '/package.json')

  return (pkg.config && pkg.config.moa_api) ? require('extend')(config_default, pkg.config.moa_api) : config_default
}

function get_dependency_modules(root_dir, config){
  var api_names = [];
  //读取root_dir下的package.json，读取里面的dependencies里的所有模块名称
  var pkg = require(root_dir + '/package.json')
  
  //如果模块名称和config.moa_api.pattern匹配，使用mount_routes挂载
  if (pkg.dependencies) {
    for(var dep in pkg.dependencies){
      console.log(dep)
    }
  }
  
  return api_names;
}

function get_api_name(name, pattern){
  try{  
    var re = new RegExp(pattern);
    
    if (re.test(name)) {
      return name;
    }
  }catch(e){  
    console.log('无效正则')  
  }  
}
