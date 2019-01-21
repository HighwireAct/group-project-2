var db = require("../models");

module.exports = function(app) {
  //get all subjects
  app.get("/api/subjects", function(req, res) {
    db.Subject.findAll({}).then(function(dbSubjects) {
      res.json(dbSubjects);
    });
  });

  //----------------------------------------------------------------

  //get all topics
  app.get("/api/topics", function(req, res) {
    db.Topic.findAll({}).then(function(dbTopics) {
      res.json(dbTopics);
    });
  });

  //----------------------------------------------------------------

  //get all subtopics
  app.get("/api/subtopics", function(req, res) {
    db.Subtopic.findAll({}).then(function(dbSubtopics) {
      res.json(dbSubtopics);
    });
  });

  //----------------------------------------------------------------

  //get all tests
  app.get("/api/tests", function(req, res) {
    db.Test.findAll({}).then(function(dbTests) {
      res.json(dbTests);
    });
  });

  // Create a new test
  app.post("/api/tests", function(req, res) {
    db.Test.create(req.body).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  // Delete a test by id
  app.delete("/api/tests/:id", function(req, res) {
    db.Test.destroy({ where: { id: req.params.id } }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  //----------------------------------------------------------------

  //get all questions
  app.get("/api/questions", function(req, res) {
    db.Question.findAll({}).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });

  // Create a new question
  app.post("/api/questions", function(req, res) {
    db.Question.create(req.body).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Delete a question by id
  app.delete("/api/questions/:id", function(req, res) {
    db.Question.destroy({ where: { id: req.params.id } }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  //----------------------------------------------------------------

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
