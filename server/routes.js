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


  getProjectsByClientId = function(req, res) {
    Projects.find({ 'client.id': req.params.id }, function(err, data) {
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

  getClientbyId = function(req, res) {
    Clients.findById(req.params.id, function(err, data) {
      if(!err) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.send(data);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  app.get('/projects', getAllProjects);
  app.get('/projects/:id', getProjectsByClientId);
  app.get('/clients', getAllClients);
  app.get('/clients/:id', getClientbyId);

}