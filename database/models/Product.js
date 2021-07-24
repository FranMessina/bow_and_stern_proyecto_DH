module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
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
        shortDescription: {
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
        vesselType: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        }
    };
    let config = { 
        tableName: 'Products', 
        timestamps: false};

    const Product = sequelize.define(alias, cols, config);

    return Product

};