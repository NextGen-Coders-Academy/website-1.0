'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.Employee, {
        through: models.Enrollment,
        as: "employees",
        foreignKey: "courseId"
      });
      Course.belongsToMany(models.Student, {
        through: models.Enrollment,
        as: "students",
        foreignKey: "courseId"
      });
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    hours: DataTypes.INTEGER,
    isFullTime: DataTypes.BOOLEAN,
    courseType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
  });
  return Course;
};