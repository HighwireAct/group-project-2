var db = require("../models");

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

  // Load test 
  app.get("/test", function (req, res) {
    res.render("test", {
      style: "test.css"
    });
  });

  // Load quizzes page, still needs function to .findAll or .findMany based on dropdown choice
  app.get("/test-selection", function (req, res) {
    res.render("test-selection", {
      style: "test-selection.css"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      style: "404.css"
    });
  });
};
