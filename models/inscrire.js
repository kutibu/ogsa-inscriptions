'use strict';
module.exports = (sequelize, DataTypes) => {
  var inscrire = sequelize.define('inscrire', {
    NumLic_Coureur : DataTypes.INTEGER,
    IDCourse_courses : DataTypes.INTEGER,
    Numerocourse_parcourir : DataTypes.FLOAT,
    NumerodeDossard_inscrire : DataTypes.INTEGER
  });


  return inscrire;
};