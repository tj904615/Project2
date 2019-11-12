module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      name: {type: DataTypes.STRING, allowNull: false},
      contributor: {type: DataTypes.STRING, allowNull: true},
      tasksLeft: {type: DataTypes.INTEGER, defaultValue: 0},
    });
    Project.associate = function(models){
      Project.hasMany(models.Task, {
        onDelete: "cascade"
      });
      Project.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          }
      });
    }
    return Project;
  };