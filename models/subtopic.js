module.exports = function(sequelize, DataTypes) {
  var Subtopic = sequelize.define("Subtopic", {
    subtopic: DataTypes.STRING
  });
  Subtopic.associate = function(models) {
    Subtopic.hasMany(models.Test, {
      onDelete: "cascade"
    });
    Subtopic.belongsTo(models.Topic, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Subtopic;
};
