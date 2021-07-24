module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        firstName: {
            type: dataTypes.STRING
        },
        LastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },   
        pass: {
            type: dataTypes.STRING
        }
    };
    let config = { 
        tableName: 'users', 
        timestamps: false};

    const User = sequelize.define(alias, cols, config);

    return User

};