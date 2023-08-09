'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class liveSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      liveSession.belongsTo(models.Event, {foreignKey: 'eventId'});
      liveSession.belongsTo(models.Prospect, {foreignKey: 'prospectId'});
    }
  }
  liveSession.init({
    isPresent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'liveSession',
    tableName: 'live_sessions',
  });
  return liveSession;
};