var db = require("../models");

module.exports = {
  topicExample: {topic: "Mathematics"},
  testExample: {testname: 'Algebra' , TopicId: 1},
  questionExample: {
    question: "Solve the equation sin(x) = 0",
    answer1: "x = PN",
    answer2: "x = P/2 + 2PN",
    answer3: "x = 3P/2 + 2PN",
    answer4: "x = P +  2PN",
    correctAnswer: 2,
    TestId: 1
  },
  createTopic: function(req, res){
    db.Topic.create(req).then(function(result) {
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
  }
}
