module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {type: DataTypes.STRING, validate:{isEmail:true}},
    password: DataTypes.TEXT
  });
  User.associate = function(models){
    User.hasMany(models.Project, {
      onDelete: "cascade"
    })
  }
  return User;
};
