const {sequelize,DataTypes,Model} = require('../db/connection');
const {Sequelize} = require("sequelize")
// TODO - define the Band model



let User = sequelize.define('user',{
    username : Sequelize.STRING ,
    email: Sequelize.STRING,
});

module.exports = {
    User
};