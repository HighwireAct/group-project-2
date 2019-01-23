var db = require("../models");
var controller = require("../controllers/controller.js");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        style: "index.css",
        msg: "ANSR",
        examples: dbExamples
      });
    });
  });

  // Load create-test page
  app.get("/create-test", function (req, res) {
    res.render("create-test", {
      style: "create-test.css"
    });
  });

  // Load create-quiz page
  app.get("/create-quiz", function(req, res) {
    res.render("create-test");
  });

  // Load quiz page
  app.get("/quiz/:id", function(req, res) {
    res.render("test");
  });

  // Load quizzes page, still needs function to .findAll or .findMany based on dropdown choice
  app.get("/quiz-selection/", function(req, res) {
    controller.findAllTests(function(tests) {
      console.dir(tests);
      res.render("quiz-selection", {
        tests: tests
      });
      
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      style: "404.css"
    });
  });
};
