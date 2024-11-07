const {Sequelize,sequelize,DataTypes,Model} = require('../db/connection');

// TODO - define the Band model

class Post extends Model {};

Post.init({
    title : DataTypes.STRING ,
    body: DataTypes.STRING,
    createdAt:DataTypes.STRING,
},{
        sequelize : sequelize,
        modelName: "Post"
})

module.exports = {
    Post
};