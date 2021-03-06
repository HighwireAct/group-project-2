module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: DataTypes.TEXT,
    answer1: DataTypes.TEXT,
    answer2: DataTypes.TEXT,
    answer3: DataTypes.TEXT,
    answer4: DataTypes.TEXT,
    correctAnswer: DataTypes.TEXT
  }, {
      timestamps: false

    });

  Question.associate = function (models) {
    Question.belongsTo(models.Test, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Question;
};
