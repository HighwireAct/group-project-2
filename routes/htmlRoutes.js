var db = require("../models");
var controller = require("../controllers/controller.js");
var fs = require("fs");

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
    let questionBank = [];
    controller.findQuestionsWithTestId(req.params.id, function(questions) {
      for (let i = 0; i < questions.length; i++) {
        let question = {
          question: questions[i].question,
          choices: [
            questions[i].answer1,
            questions[i].answer2,
            questions[i].answer3,
            questions[i].answer4
          ],
          correct: questions[i][`answer${questions[i].correctAnswer}`]
        }
        questionBank.push(question);
      }
      console.dir(questionBank);
      // fs.writeFileSync("questionBank.json", JSON.stringify(questionBank, null, 2), 'utf-8');
      res.render("test", {
        questionBank: JSON.stringify(questionBank)
      });
    });
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
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      style: "404.css"
    });
  });
};
