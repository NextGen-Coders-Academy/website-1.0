'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prospect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prospect.belongsToMany(models.Event, {
        through: models.liveSession,
        as: "events",
        foreignKey: "prospectId"
      });
    }
  }
  Prospect.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false
    },
    location: DataTypes.STRING,
    bio: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'prospect'
    }
  }, {
    sequelize,
    modelName: 'Prospect',
    tableName: 'prospects',
  });
  return Prospect;
};