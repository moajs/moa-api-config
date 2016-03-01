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

require('.')(app, __dirname)

app.start(3019);