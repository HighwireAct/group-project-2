module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    subject: DataTypes.STRING
  });
  Subject.associate = function(models) {
    Subject.hasMany(models.Topic, {
      onDelete: "cascade"
    });
  };
  return Subject;
};
