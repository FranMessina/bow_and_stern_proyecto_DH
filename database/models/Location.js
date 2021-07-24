module.exports = (sequelize, dataTypes) => {
    let alias = 'Locations';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        location: {
            type: dataTypes.STRING
        },

    };

    let config = { 
        tableName: 'locations',
        timestamps: false};

    const Location = sequelize.define(alias, cols, config);

    return Location

};