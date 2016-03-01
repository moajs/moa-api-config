# moa-api-config


## Install

```
npm i -S moa-api-config
```

## Usages

in app.js

```
var app = require('base2')({
  // debug: true,
  root:__dirname,
  "views": "views",
  "routes": "routes2",
  "public": "public",
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

require('moa-api-config')(app, __dirname)

app.start(3019);
```

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

