module.exports = (sequelize, Sequelize) => {
    const Prospect = sequelize.define("prospect", {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
    });
    return Prospect;
  };