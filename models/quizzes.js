module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    testName: DataTypes.STRING
  });
  Quiz.associate = function(models) {
    Quiz.hasMany(models.Question, {
      onDelete: "cascade"
    });

    Quiz.belongsTo(models.Topic, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Quiz;
};
