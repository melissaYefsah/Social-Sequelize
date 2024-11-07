const { Comment, Like, Post,User,Profile} = require("./index.js");
const { sequelize } = require('./db/connection.js');
const users = require('./seed/users.json');
const comments = require('./seed/comments.json')
const profiles = require('./seed/profiles.json');
const likes = require('./seed/likes.json');
const posts = require('./seed/posts.json');




describe('Social Sequelize Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here
    
    test("can create a User", async function() {
        const testUser = await User.create({ username:'hello',email:'hello@gmail.com' });
        expect(testUser.email).toBe('hello@gmail.com');
    })
    test("can create a Profile", async function() {
        await Profile.bulkCreate(profiles);
        const foundProfile = await Profile.findByPk(1)
        expect(foundProfile).toEqual(expect.objectContaining(profiles[0]));
    })
    test("can create a Comment", async function() {
        await Comment.bulkCreate(comments);
        const foundComment = await Comment.findByPk(1)
        expect(foundComment).toEqual(expect.objectContaining(comments[0]));
    })
    test("can create a Post", async function() {
        await Post.bulkCreate(posts);
        const foundPost = await Post.findByPk(1)
        expect(foundPost).toEqual(expect.objectContaining(posts[0]));
    })
    test("can create a Like", async function() {
        await Like.bulkCreate(likes);
        const foundLike = await Like.findByPk(1)
        expect(foundLike).toEqual(expect.objectContaining(likes[0]));
    })
    //one to one
    test("user can have only one profile",async function(){
        await sequelize.sync({force:true})
        let myUser = await User.create(users[0]);
        let myProfile = await Profile.create(profiles[0]);

        await myUser.setProfile(myProfile);
        const associateProfile = await myUser.getProfile();
        expect (associateProfile instanceof Profile).toBeTruthy();

    })
    //one to many
    test("user can have many likes",async function(){
        await sequelize.sync({force:true})
        let myUser = await User.create(users[0]);
        let myLike1 = await Like.create(likes[0]);
        let myLike2 = await Like.create(likes[1]);

        await myUser.addLike(myLike1);
        await myUser.addLikes(myLike2);
        const associateLikes = await myUser.getLikes();
        expect (associateLikes.length).toBe(2);
        expect (associateLikes instanceof Like).toBeTruthy;

    })
    //many to many
    test("likes can have many users",async function(){
        await sequelize.sync({force:true})
        let myLike = await Like.create(likes[0]);
        let myUser1 = await User.create(users[0]);
        let myUser2 = await User.create(users[1]);

        await myLike.addUsers(myUser1);
        await myLike.addUsers(myUser2);
        const associateUsers = await myLike.getUsers();
        expect (associateUsers.length).toBe(2);
        expect (associateUsers instanceof Like).toBeTruthy;

    })
        
    



})