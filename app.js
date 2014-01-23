
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    assert = require('assert'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
  res.status(404).render('404', {title: 'Not found, 404'});
});
// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

var routesDir = './routes';
fs.readdir(routesDir, function (err, files) {
  assert.ifError(err);
  files.forEach(function (file) {
    require(path.join(__dirname, routesDir, file)).init(app);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  var urlOfApp = 'http://localhost:' + app.get('port');
  console.log('server running : ' + urlOfApp);
});
