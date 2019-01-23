var db = require("../models");
var controller = require("../controllers/controller.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "ANSR",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load create-quiz page
  app.get("/create-quiz", function(req, res) {
    res.render("create-test");
  });

  // Load quiz page
  app.get("/quiz", function(req, res) {
    res.render("test");
  });

  // Load quizzes page, still needs function to .findAll or .findMany based on dropdown choice
  app.get("/quiz-selection/", function(req, res) {
    controller.findAllTests(function(tests) {
      console.dir(tests);
      res.render("quiz-selection", {
        tests: tests
      });
    });
  });
};
