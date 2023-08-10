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
      Event.belongsToMany(models.Prospect, {
        through: models.liveSession,
        as: "prospects",
        foreignKey: "eventId"
      });
    }
  }
  Event.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    zoomLink: DataTypes.STRING,
    recordedLink: DataTypes.STRING,
    recordedPassword: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
  });
  return Event;
};