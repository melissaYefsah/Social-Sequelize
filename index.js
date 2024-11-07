
const {User} = require("./models/User");
const {Profile} = require("./models/Profile.js");
const {Comment} = require("./models/Comment");
const {Post} = require("./models/Post.js");
const {Like} = require("./models/Like.js");

// Define your associations here

// User have one Profile
User.hasOne(Profile);
Profile.belongsTo(User);

// user have many Post and a Post can have one User 
User.hasMany(Post);
Post.belongsTo(User);

//post have many Comment and a comment has one post
Comment.belongsTo(Post);
Post.hasMany(Comment);

//User have many Like and Like can have mayn user
User.hasMany(Like);
Like.hasMany(User);





module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}