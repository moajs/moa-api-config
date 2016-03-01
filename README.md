# moa-api-config

读取package.json里的模块，作为api模块，加载里面的路由目录即可

## Install

```
npm i -S moa-api-config
```

## Usages

### base2

in app.js

```
var app = require('base2')({
  // debug: true,
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

require('moa-api-config')(app, __dirname)

app.start(3019);
```

### express

in app.js

```
var express = require('express')
var app = express()

app.mount_routes = require('mount-routes');

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

require('moa-api-config')(app, __dirname)

app.listen(3000)
```

### koa

把mount-routes替换成mount-koa-routes即可，其他都是和express一样的。

## Configure

在package.json里，指定模块前缀，比如包含*api-*

```
{
  …
  "config": {
    "moa_api": {
      "pattern": "hz-api-*",
      "routes_dir": "app/routes",
    }
  }
  …
}
```

