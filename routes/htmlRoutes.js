var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

  // Load example page and pass in an example by id
  app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
    });
  app.get("/project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/project.html"));
    });
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
  app.get("/team", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/team.html"));
    });  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
