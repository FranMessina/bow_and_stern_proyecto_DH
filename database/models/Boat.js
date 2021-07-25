module.exports = (sequelize, dataTypes) => {
    let alias = 'Boat';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: dataTypes.STRING
        },
        short_description: {
            type: dataTypes.STRING
        },   
        image: {
            type: dataTypes.STRING
        },
        year: {
            type: dataTypes.INTEGER
        },
        measures: {
            type: dataTypes.INTEGER
        },
        vessel_type: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        }
    };
    let config = { 
        tableName: 'boats', 
        timestamps: false,
        underscored: true
    };

    const Boat = sequelize.define(alias, cols, config);

    return Boat

};