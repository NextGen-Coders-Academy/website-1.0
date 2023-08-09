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
        foreignKey: 'prospectId',
        otherKey: 'eventId' 
      });
      Prospect.hasMany(models.liveSession);
    }
  }
  Prospect.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
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