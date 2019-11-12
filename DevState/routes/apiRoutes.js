var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/login", function(req, res) {
    console.log(req.body);
    db.User.findAll({}).then(function(dbUser){
      res.json(dbUser)
    })
  });
  
  app.get("/api/:username", function(req,res){

    db.User.findOne({
      where: {username: req.params.username}
    }).then(function(dbUser){
      console.log(dbUser.id + " this is dbUser")
      res.json(dbUser.id)
    })
  })
  app.get("/api/projects/:projectname", function(req,res){

    db.Project.findOne({
      where: {name: req.params.projectname}
    }).then(function(dbProject){
      res.json(dbProject.id)
    })
  })

  // Create a new example
  app.post("/api/signup", function(req, res) {
    console.log(req.body)
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/projects", function(req, res) {
    console.log(req.body)
    db.Project.create({
      name: req.body.name,
      UserId: req.body.id
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });
  app.post("/api/tasks", function(req, res) {
    console.log(req.body)
    db.Task.create({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      ProjectId: req.body.id
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
