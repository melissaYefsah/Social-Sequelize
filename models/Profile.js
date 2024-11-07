const {Sequelize,sequelize,DataTypes,Model} = require('../db/connection');

// TODO - define the Band model

class Profile extends Model {};

Profile.init({
    bio : DataTypes.STRING ,
    profilePicture: DataTypes.STRING,
    birthday:DataTypes.STRING,
},{
        sequelize : sequelize,
        modelName: "Profile"
})

module.exports = {
    Profile
};