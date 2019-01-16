module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define("Test", {
    testname: DataTypes.STRING
  });
  Test.associate = function(models) {
    Test.hasMany(models.Question, {
      onDelete: "cascade"
    });

    Test.belongsTo(models.Topic, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Test;
};
