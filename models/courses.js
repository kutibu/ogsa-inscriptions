'use strict';
module.exports = (sequelize, DataTypes) => {
  var courses = sequelize.define('courses', {
    Nomcourse_courses: DataTypes.STRING,
    Datecourse_courses : DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        courses.hasMany(models.courses)
      }
    }
  });
  return courses;
};