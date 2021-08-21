module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    // se define la informacion que requiere sequelize para definir el modelo
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },   
        password: {
            type: dataTypes.STRING
        },
        role: {
            type: dataTypes.ENUM('user','admin')
        },
    };
    let config = { 
        tableName: 'users', 
        timestamps: false,
        underscored: true
    };

    // se crea el modelo con la informacion configurada 
    const User = sequelize.define(alias, cols, config);

    // devuelve el modelo configurado
    return User

};