module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    subject: DataTypes.STRING
  }, {
    timestamps: false
  });
  Subject.associate = function(models) {
    Subject.hasMany(models.Topic, {
      onDelete: "cascade"
    });
  };
  return Subject;
};
