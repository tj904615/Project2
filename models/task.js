module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      name: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.TEXT, allowNull: false},
      status: {type: DataTypes.STRING, allowNull: false},
      assignee: {type: DataTypes.STRING, allowNull: true},
    });
    Task.associate = function(models){
      Task.belongsTo(models.Project, {
          foreignKey: {
              allowNull: false
          }
      });
    }
    return Task;
  };