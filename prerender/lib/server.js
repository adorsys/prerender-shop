var prerender = require('prerender');

var server = prerender({
    workers: 10,
    iterations: 10,
    phantomBasePort: 12300,
    messageTimeout: 5000
});

server.start();