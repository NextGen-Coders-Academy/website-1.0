'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    bio: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employees',
    tableName: 'employees'
  });
  return employees;
};