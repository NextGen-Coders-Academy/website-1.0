module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define( 'test', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
        tableName: 'test'
    }, )
    return Test
}