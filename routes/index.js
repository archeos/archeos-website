/**
 * Home page router
 */

exports.init = function (app) {
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'ArcheOS - Archaeological Operating System'
    });
  });
};
