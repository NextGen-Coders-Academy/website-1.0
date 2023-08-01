const { Sequelize, DataTypes } = require('sequelize');

const Test = sequelize.define('Test', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  });
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true