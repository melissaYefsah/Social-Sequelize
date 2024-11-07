const {Sequelize,sequelize,DataTypes,Model} = require('../db/connection');

// TODO - define the Band model

class Comment extends Model {};

Comment.init({
    body: DataTypes.STRING,
    createdAt:DataTypes.STRING,
},{
        sequelize : sequelize,
        modelName: "Comment"
})

module.exports = {
    Comment
};