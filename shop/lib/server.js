var express = require('express');

var PORT = 8080;

var PRERENDER_IP = process.env.PRERENDERSHOP_PRERENDER_1_PORT_3000_TCP_ADDR;
var PRERENDER_PORT = process.env.PRERENDER_1_PORT_3000_TCP_PORT;

var HOST = process.env.PUBLIC_HOST_ADDRESS;

var prerenderServiceUrl = 'http://' + PRERENDER_IP + ':' + PRERENDER_PORT;

var app = express();

app.use(require('prerender-node')
    .set('prerenderServiceUrl', prerenderServiceUrl)
    .set('host', HOST)
    );
app.use('/bower_components', express.static('/usr/src/app/bower_components'));
app.use('/app', express.static('/usr/src/app/lib/app'));

app.get('/', function(req, res){
  res.sendFile('/usr/src/app/lib/app/index.html');
});

app.listen(PORT);

console.log('angular app running on http://' + HOST + ' using prerender service on ' + prerenderServiceUrl);