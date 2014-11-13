var https = require('https');
var moment = require('moment');
exports.init = function (app) {
  // FB user Id
  var ArcheOSUser = '258977573543';
  // Options for WS call
  var options = {
    hostname: 'graph.facebook.com',
    port: 443,
    path: '/' + ArcheOSUser + '/feed/?access_token=' + process.env.FB_TOKEN,
    method: 'GET'
  };

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
        console.log(buffer.toString());
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

      wsRes.on('error', function(err) {
        console.log(err);
        // TODO: onError : 
        // - Low level (network) error shoulde handled here
        // - API error => Outside this callback
      });

    });
    wsReq.end();
  });
}