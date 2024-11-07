const {Sequelize,sequelize,DataTypes,Model} = require('../db/connection');

// TODO - define the Band model

class Like extends Model {};

Like.init({
    reactionType : DataTypes.STRING ,
    createdAt:DataTypes.STRING,
},{
        sequelize : sequelize,
        modelName: "Like"
})

module.exports = {
    Like
};