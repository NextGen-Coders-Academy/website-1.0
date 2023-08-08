'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsToMany(models.Event, { 
        through: models.liveSession,
        foreignKey: 'eventtId',
        otherKey: 'prospectId'  
      });
      Event.hasMany(models.liveSession);
    }
  }
  Event.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    zoomLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
  });
  return Event;
};