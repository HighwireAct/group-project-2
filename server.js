require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");
var controller = require("./controllers/controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//app.use(routes);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// app.use(controller)

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
console.log();

app.get("/createSubject", function(req, res) {
  controller.createSubject(controller.subjectExample, res);
});

app.get("/createTopic", function(req, res) {
  controller.createTopic(controller.topicExample, res);
});

app.get("/createSubtopic", function(req, res) {
  controller.createSubtopic(controller.subtopicExample, res);
});

app.get("/createTest", function(req, res) {
  controller.createTest(controller.testExample, res);
});

app.get("/createQuestion", function(req, res) {
  controller.createQuestion(controller.questionExample, res);
});

app.get("/getSubjectsList", function(req, res) {
  controller.getSubjectsList(req, res);
});

app.get("/getTopicsList", function(req, res) {
  controller.getTopicsList(req, res);
});

app.get("/getSubtopicsList", function(req, res) {
  controller.getSubtopicsList(req, res);
});

app.get("/getTestsList", function(req, res) {
  controller.getTestsList(req, res);
});

app.get("/findQuestionsWithTestId/:testid", function(req, res) {
  controller.findQuestionsWithTestId(req, res, req.params.testid);
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
