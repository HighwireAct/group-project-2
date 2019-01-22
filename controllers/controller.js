var db = require("../models");

module.exports = {
  subjectExample:{subject: "Mathematics"},
  topicExample: {topic: "Algebra", SubjectId: 1},
  subtopicExample: {subtopic: "Early Algebra", TopicId: 1},
  testExample: {testname: 'Early Algebra Level 1' , SubtopicId: 1},
  questionExample: {
    question: "Solve the equation sin(x) = 0",
    answer1: "x = PN",
    answer2: "x = P/2 + 2PN",
    answer3: "x = 3P/2 + 2PN",
    answer4: "x = P +  2PN",
    correctAnswer: 2,
    TestId: 1
  },
  createSubject: function(req, res){
    db.Subject.create(req).then(function(result) {
      res.json(result)
    });
  },
  createTopic: function(req, res){
    db.Topic.create(req).then(function(result) {
      res.json(result)
    });
  },
  createSubtopic: function(req, res){
    db.Subtopic.create(req).then(function(result) {
      res.json(result)
    });
  },
  createTest: function(req, res){
    db.Test.create(req).then(function(result) {
      res.json(result)
    });
  },
  createQuestion: function(req, res){
    db.Question.create(req).then(function(result) {
      res.json(result)
    });
  },
  getSubjectsList: function(req, res){
    db.Subject.findAll({}).then((result) => {
      let resultArr = [];
      
      result.forEach((item) => {
        resultArr.push(item.dataValues)
      })
      console.log(resultArr);
      res.json(resultArr);
    });
  },
  getTopicsList: function(req, res){
    db.Topic.findAll({}).then((result) => {
      let resultArr = [];
      
      result.forEach((item) => {
        resultArr.push(item.dataValues)
      })
      console.log(resultArr);
      res.json(resultArr);
    });
  },
  getSubtopicsList: function(req, res){
    db.Subtopic.findAll({}).then((result) => {
      let resultArr = [];
      
      result.forEach((item) => {
        resultArr.push(item.dataValues)
      })
      console.log(resultArr);
      res.json(resultArr);
    });
  },
  getTestsList: function(req, res){
    db.Test.findAll({}).then((result) => {
      let resultArr = [];
      
      result.forEach((item) => {
        resultArr.push(item.dataValues)
      })
      console.log(resultArr);
      res.json(resultArr);
    }); 
  },
  findQuestionsWithTestId: function(req, res, TestId){
    db.Question.findAll({
      where: {
        TestId: TestId
      }
    }).then((result) => {
      let resultArr = [];
      
      result.forEach((item) => {
        resultArr.push(item.dataValues)
      })
      console.log(resultArr);
      res.json(resultArr);
    });
  },
  findTestWithQuestions: function(req, res, TestId) {
    db.Test.findAll({
      where: {
        id: TestId
      },
      include: [
        {model: db.Question, as: "Questions"},
        {model: db.Subtopic, as: "Subtopic", include: {
          model: db.Topic, as: "Topic"
        }}
      ]
    }).then(test => {
      res.json(test);
    });
  }
}
