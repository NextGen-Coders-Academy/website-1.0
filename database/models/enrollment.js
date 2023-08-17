'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enrollment.init({
    enrollmentDate: DataTypes.DATE,
    certificateUrl: DataTypes.STRING,
    certificateId: DataTypes.STRING,
    isCurrent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'enrollments',
  });
  return Enrollment;
};