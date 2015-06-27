//File: routes/tvshows.js
module.exports = function(app) {

  var Projects = require('./projects.js');
  var Clients = require('./clients.js');

  getAllProjects = function(req, res) {
      Projects.find(function(err, data) {
          if(!err) {
              res.header('Access-Control-Allow-Origin', 'http://localhost');
              res.send(data);
          } else {
              console.log('ERROR: ' + err);
          }
      });
  };


  getProjectsByClientSlug = function(req, res) {
    Projects.find({ 'client.slug': req.params.slug }, function(err, data) {
      if(!err) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.send(data);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };


  getAllClients = function(req, res) {
    Clients.find(function(err, data) {
      if(!err) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.send(data);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  getClientbySlug = function(req, res) {
    Clients.findOne({ 'slug': req.params.slug }, function(err, data) {
      if(!err) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.send(data);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  app.get('/projects', getAllProjects);
  app.get('/projects/:slug', getProjectsByClientSlug);
  app.get('/clients', getAllClients);
  app.get('/client/:slug', getClientbySlug);

}