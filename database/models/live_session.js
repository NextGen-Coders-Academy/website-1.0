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
      // liveSession.belongsTo(models.Event);
      // liveSession.belongsTo(models.Prospect);
    }
  }
  liveSession.init({
    isPresent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'liveSession',
    tableName: 'live_sessions',
  });
  return liveSession;
};