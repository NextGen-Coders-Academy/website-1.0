'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Course, {
        through: models.Enrollment,
        as: "courses",
        foreignKey: "studentId"
      });
    }
  }
  Student.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // note: empty form fields return an empty string (which is not null), catch validator here or in the controller?
        notNull: {
          msg: 'Please enter your first name'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your last name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true, // supposed to check email format (foo@bar.com), doesn't appear to work...
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your email'
        }
      }
    },
    location: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
  });
  return Student;
};