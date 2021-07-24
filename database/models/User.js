module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    // se define la informacion que requiere sequelize para definir el modelo
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

    // se crea el modelo con la informacion configurada 
    const User = sequelize.define(alias, cols, config);

    // devuelve el modelo configurado
    return User

};