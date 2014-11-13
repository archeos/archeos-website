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


  var moment = require('moment');
  // FB user Id
  var ArcheOSUser = '258977573543';
  // Options for WS call
  var options = {
    hostname: 'graph.facebook.com',
    port: 443,
    path: '/' + ArcheOSUser + '/feed/?access_token=' + process.env.FB_TOKEN,
    method: 'GET'
  };

  /**
   * News
   */
  app.get('/news', function (req, res) {
    // 'buffer,' the cooncat of all http responses
    var buffer = '';
    
    // Make the http request
    var wsReq = https.request(options, function (wsRes) {
      
      // Put each chunck emitted in the buffer 
      wsRes.on('data', function(chunk) {
            buffer+=chunk;
          });

      // Eventually, we parse and filter the buffer and write the response
      wsRes.on('end', function() {
        
        // Parse and filter the buffer
        var msg = JSON.parse(buffer)
                      .data
                      .filter(function(msg) {
                      
                      // This filter is little bit hacky. Needed since I use
                      // an App token for now
                      return (msg.from.id === ArcheOSUser && msg.message);
                  
                    }).map(function(msg) {

                      // Here we use 'moment' to format the timestamp
                      msg.created_time = moment(msg.created_time).fromNow();

                      // If the message is a link we can replace it
                      if(msg.link)
                        msg.message = msg.message
                                       .replace(msg.link, '')
                                       .replace(/[.,:?!]+\s?$/m, '');
                      return msg;
                    });

        // Render the response
        res.render('news', {
          title: 'Archeos - News',
          news: msg
        });
      });
    });
    // TODO: on error => auth error + network error
    wsReq.end();
  });
};
