/**
 * Router
 */
var https = require('https');

exports.init = function (app) {

  /**
   * index
   */
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'ArcheOS - Archaeological Operating System'
    });
  });

  /**
   * Options for WS call
   */
  var options = {
   hostname: 'graph.facebook.com',
   port: 443,
   path: '/' + ArcheOSUser + '/feed/?access_token=' + token,
   method: 'GET'
  };

  /**
   * News
   */
  app.get('/news', function (req, res){
    var buffer = '';
    var wsReq = https.request(options, function (wsRes){
      wsRes.on('data', function(chunk){
            buffer+=chunk;
        });

      wsRes.on('end', function() {
        // try catch
        var msg = JSON.parse(buffer).data.filter(function(m){
          return m.from.id == ArcheOSUser;
        });

        res.render('news', {
          title: 'Archeos - News',
          news: msg
        });
      });
    });
    // on error
    wsReq.end();
  });
};
