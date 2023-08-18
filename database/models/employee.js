'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsToMany(models.Course, {
        through: models.Enrollment,
        as: "courses",
        foreignKey: "employeeId"
      });
    }
  }
  Employee.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: DataTypes.STRING,
    bio: DataTypes.STRING,
    image: DataTypes.BLOB,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    isHidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees',
  });
  return Employee;
};