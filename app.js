var app = require('base2')({
  // debug: true,
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

require('.')(app, __dirname)

app.start(3019);