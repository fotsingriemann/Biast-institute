const {Sequelize, DataTypes} = require("sequelize");
const mysql2 =  require('mysql2'); 

require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect : 'mysql',
        dialectModule: mysql2,
        port: process.env.DB_PORT
    }

)

const  authenticate = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connexion has been established successfully")
    } catch (error) {
        console.error("Unable to connect to the database: ",  error)
    }
}

module.exports = {
    authenticate,
    sequelize,
    DataTypes
}
